from django.shortcuts import HttpResponse
from django.views.generic.base import View
from .models import CustomUser

class RegisterUser(View):
    def get(self, request):
        data = request.GET

        if (CustomUser.objects.filter(username = data.get("username"))):
            return HttpResponse('Not')


        user = CustomUser(email = data.get('email'), username = data.get('username'), password = data.get('password'))
        user.set_password(data.get('password'))
        user.save()

        return HttpResponse('Ok')
        