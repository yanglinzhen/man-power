from sqlalchemy import Column, Integer, String, DateTime, Float
from sqlalchemy.sql import text
from man_power.database import Base
import datetime

class OTRecord(Base):
    __tablename__ = 'ot_records'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(50))
    department = Column(String(50))
    project = Column(String(50))
    ot_date = Column(DateTime(), default=text('NOW()'))
    ot_reason = Column(String(50))
    ot_duration = Column(Float())

    def __init__(self, name=None, department=None, project=None, ot_date=datetime.datetime.now(), ot_reason=None, ot_duration=None):
        self.name = name
        self.department = department
        self.project = project
        self.ot_date = ot_date
        self.ot_reason = ot_reason
        self.ot_duration = ot_duration

    def __repr__(self):
        return '<OTRecord name=%s, department=%s, project=%s, ot_date=%s, ot_reason=%s, ot_duration=%s>' % \
            (self.name, self.department, self.project, self.ot_date, self.ot_reason, self.ot_duration)
