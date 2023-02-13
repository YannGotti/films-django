from django.urls import path
from . import views

urlpatterns = [
    path('reg/', views.RegisterUser.as_view(), name='reg_user'),
]