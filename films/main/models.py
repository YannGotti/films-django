from django.db import models

class FilmsOnMainPage(models.Model):
    film_id = models.IntegerField('ID Фильма')
    category = models.CharField('Категория', max_length=30)

    def __str__(self):
        return f'{self.film_id}, {self.category}'

    class Meta:
        verbose_name = 'Фильм на главной странице'
        verbose_name_plural = 'Фильмы на главной сранице'
    