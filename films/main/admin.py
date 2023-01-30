from django.contrib import admin
from .models import User

@admin.register(User)
class UserAdminPanel(admin.ModelAdmin):
    list_display = ('username', 'date_register')