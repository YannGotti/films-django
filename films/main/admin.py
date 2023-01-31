from django.contrib import admin
from .models import User, FilmsOnMainPage

@admin.register(User)
class UserAdminPanel(admin.ModelAdmin):
    list_display = ('username', 'date_register')

@admin.register(FilmsOnMainPage)
class FilmsOnMainPageAdminPanel(admin.ModelAdmin):
    list_display = ('film_id', 'category')