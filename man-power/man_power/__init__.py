"""
The flask application package.
"""

from flask import Flask
from flask_cors import CORS

app = Flask(__name__, static_folder='./static/dist', template_folder='./static/dist')
CORS(app)

from man_power.database import init_db
init_db()
import man_power.views
