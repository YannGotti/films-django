from django.shortcuts import HttpResponse,redirect
from django.views.generic.base import View
from .models import CustomUser
from .form import UploadImageProfileForm
from pathlib import Path
from django.core.files.storage import FileSystemStorage



BASE_DIR = Path(__file__).resolve().parent.parent

class RegisterUser(View):
    def get(self, request):
        data = request.GET

        if (CustomUser.objects.filter(username = data.get("username"))):
            return HttpResponse('Not')


        user = CustomUser(email = data.get('email'), username = data.get('username'), password = data.get('password'))
        user.set_password(data.get('password'))
        user.save()

        return HttpResponse('Ok')


class UploadImageProfile(View):
    def post(self, request):

        form = UploadImageProfileForm(request.POST)

        if request.method == 'POST' and request.FILES['image']:

            print(request.FILES['image'])

            image = request.FILES['image']
            fss = FileSystemStorage(location='media/profile_users/')
            file = fss.save(image.name, image)
            user = CustomUser.objects.get(id = int(form.data.get('id_user')))

            try:

                filename = str(user.profile_image)
                filename = filename.split('/')

                fss.delete(filename[1])
            except:
                print('not found path')

            user.profile_image = 'profile_users/' + image.name
            user.save()

        return redirect('/profile/')
        