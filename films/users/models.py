from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    profile_image = models.ImageField('Фото пользователя', upload_to='profile_users/', blank=True, default='profile_users/user_profile.png', null=True)
    email = models.EmailField('Email пользователя', max_length=254)
    date_register = models.DateTimeField('Дата регистрации', auto_now_add=True)




