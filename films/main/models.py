from django.db import models

class User(models.Model):
    username = models.CharField('Юзернейм пользователя', max_length=50)
    first_name = models.CharField('Имя пользователя', max_length=50 , null=True)
    last_name = models.CharField('Фамилия пользователя', max_length=50, null=True)
    password = models.CharField('Пароль пользователя (sha256)', max_length=300)
    date_register = models.DateTimeField('Дата регистрации', auto_now_add=True)

    def __str__(self):
        return f'{self.username}, {self.date_register}'

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'