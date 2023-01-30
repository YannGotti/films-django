from django.shortcuts import render, redirect, HttpResponse
from django.http import JsonResponse
from django.core import serializers
from django.views.generic.base import View
from .models import User

class MainPage(View):
    def get(self, request):
        context = {
            #получить текущего пользователя
        }
        return render(request, 'base.html')