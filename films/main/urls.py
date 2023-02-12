from django.urls import path
from . import views

urlpatterns = [
    path('', views.MainPage.as_view()),
    path('api/', views.Api.as_view(), name='film_page'),

    path('film/<int:pk>/', views.FilmPage.as_view(), name='film_page'),
    path('register/', views.RegisterUser.as_view(), name='register_user'),
    path('profile/', views.ProfileUser.as_view(), name='profile_user'),

]