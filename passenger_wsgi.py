# -*- coding: utf-8 -*-
import os, sys
sys.path.insert(0, '/var/www/u1924472/data/www/bazafilm.fun/films')
sys.path.insert(1, '/var/www/u1924472/data/djangoenv/lib/python3.9/site-packages')
os.environ['DJANGO_SETTINGS_MODULE'] = 'films.settings'
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()