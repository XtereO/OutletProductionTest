import os
import sys
import platform
#путь​ к проекту     /home/c/my login/Name folder where project host/public_html
sys.path.insert(0, '/home/c/cr37069/Outletest/public_html')
#путь​ к фреймворку
sys.path.insert(0, '/home/c/cr37069/Outletest/public_html/Outlet')
#путь​ к виртуальному окружению
sys.path.insert(0, '/home/c/cr37069/Outletest/public_html/env/lib/python{0}/site-packages'.format(platform.python_version()[0:3]))
os.environ["DJANGO_SETTINGS_MODULE"] = "Outlet.settings"
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
