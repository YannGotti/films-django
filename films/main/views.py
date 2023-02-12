from django.shortcuts import render, redirect, HttpResponse
from django.http import JsonResponse
from django.core import serializers
from django.views.generic.base import View
from .models import User
import requests

TOKEN = 'KSNK1YNJnmqkaK1y2bbHV10er4s0eNEw'
class MainPage(View):
    def get(self, request):
        context = {
            #получить текущего пользователя
        }
        return render(request, 'main/index.html')

class FilmPage(View):
    def get(self, request, pk):

        context = {
            'film_id' : pk,
        }
        
        return render(request, 'main/film.html', context=context)


class Api(View):
    def get(self, request):
        data = request.GET

        if (data.get("method") == 'movies'):
            res = requests.get('https://videocdn.tv/api/movies?api_token=' + TOKEN + '&limit=50&page=1')

        if (data.get("method") == 'short'):
            res = requests.get('https://videocdn.tv/api/short?api_token=' + TOKEN + '&kinopoisk_id=' + data.get("kp_id"))

        if (data.get("method") == 'search'):
            res = requests.get('https://videocdn.tv/api/short?api_token=' + TOKEN + '&title=' + data.get("title"))

        context = {
            'data' : res.text
        }
        return JsonResponse(context)