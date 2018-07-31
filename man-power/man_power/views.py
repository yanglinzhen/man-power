"""
Routes and views for the flask application.
"""

from datetime import datetime
from flask import render_template, request, url_for, Response, send_file
from man_power import app
from man_power.database import db_session
from man_power.models import OTRecord
import sqlalchemy.exc as exc
from flask_cors import cross_origin
import json
import pandas as pd
from pandas import DataFrame
import calendar
import mimetypes
import os

CWD = os.getcwd()

@app.route('/')
def home():
    #"""Renders the home page."""
    return render_template(
        'index.html',
        title='工时统计'
    )

@app.route('/ot_record', methods=['POST', 'GET'])
@cross_origin()
def addOTRecord():
    if request.method == 'POST':
        try:
            data = json.loads(request.data)
            record = OTRecord(data['userName'], data['department'], data['project'], pd.to_datetime(data['otDate']), data['otReason'], data['otDuration'])
            db_session.add(record)
            db_session.commit()
            return Response('data inserted successfully', status=200)
        except exc.IntegrityError as e:
            return Response(e, status=500)
    elif request.method == 'GET':
        year = int(request.args.get('year'))
        month = int(request.args.get('month'))
        return_excel = bool(request.args.get('excel'))

        if year == None or month == None:
            return Response('invalid arguments', status=403)
        startDate = datetime(year, month, 1, 0, 0)
        endDate = datetime(year, month, getLastDayInMonth(year, month), 0, 0)
        print(str(startDate) + '\r\n' + str(endDate))

        raw_data = db_session.query(OTRecord.name, OTRecord.department, OTRecord.ot_date, OTRecord.ot_duration, OTRecord.project, OTRecord.ot_reason)\
            .filter(startDate < OTRecord.ot_date, OTRecord.ot_date < endDate).all()
    
        ot_record_data = DataFrame(raw_data, columns=['姓名', '部门', '日期', '时数', '所属项目', '工作内容'])
        ot_record_data['日期'] = ot_record_data['日期'].apply(lambda x : str(x))
        print(ot_record_data)
        if not return_excel:
            return ot_record_data.to_json(orient='split')
        file_path = os.path.join(CWD, '工时统计{0}-{1}.xlsx'.format(year, month))
        writer = pd.ExcelWriter(file_path)
        ot_record_data.to_excel(writer,'Sheet1')
        writer.save()
        return send_file(file_path, as_attachment=True, attachment_filename=file_path)

@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()

def getLastDayInMonth(year, month):
    return calendar.monthrange(year, month)[1]