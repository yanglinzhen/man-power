# Deployment
Run ```netstat -tulpn``` to list all services and their PID, ```kill -9``` for PID of port 8089, 
then run ```cd /projects/PublishOutput/ &&  python3.6 runserver.py > flask.log 2>&1 &```