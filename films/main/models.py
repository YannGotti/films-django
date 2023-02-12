from django.db import models

class User(models.Model):
    email = models.EmailField('Email пользователя', max_length=254)
    username = models.CharField('Юзернейм пользователя', max_length=50)
    password = models.CharField('Пароль пользователя (sha256)', max_length=300)
    date_register = models.DateTimeField('Дата регистрации', auto_now_add=True)

    def __str__(self):
        return f'{self.username}, {self.date_register}'

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'


class FilmsOnMainPage(models.Model):
    film_id = models.IntegerField('ID Фильма')
    category = models.CharField('Категория', max_length=30)

    def __str__(self):
        return f'{self.film_id}, {self.category}'

    class Meta:
        verbose_name = 'Фильм на главной странице'
        verbose_name_plural = 'Фильмы на главной сранице'
    