from django.urls import path
from . import views

urlpatterns = [
    path('reg/', views.RegisterUser.as_view(), name='reg_user'),
    path('set_image/', views.UploadImageProfile.as_view(), name='set_image'),
]