from django.urls import path
from . import views

urlpatterns = [
    path('', views.MainPage.as_view()),
    path('film/<int:pk>/', views.FilmPage.as_view(), name='film_page'),
]