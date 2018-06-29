"""
This script runs the man_power application using a development server.
"""

from os import environ
from man_power import app

if __name__ == '__main__':
    #HOST = environ.get('SERVER_HOST', 'localhost')
    PORT = 8089
    app.run('0.0.0.0', PORT)
