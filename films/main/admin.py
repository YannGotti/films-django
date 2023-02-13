from django.contrib import admin
from .models import FilmsOnMainPage

@admin.register(FilmsOnMainPage)
class FilmsOnMainPageAdminPanel(admin.ModelAdmin):
    list_display = ('film_id', 'category')