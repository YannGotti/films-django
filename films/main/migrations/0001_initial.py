# Generated by Django 4.1.5 on 2023-01-30 19:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50, verbose_name='Юзернейм пользователя')),
                ('first_name', models.CharField(max_length=50, null=True, verbose_name='Имя пользователя')),
                ('last_name', models.CharField(max_length=50, null=True, verbose_name='Фамилия пользователя')),
                ('password', models.CharField(max_length=300, verbose_name='Пароль пользователя (sha256)')),
                ('date_register', models.DateTimeField(auto_now_add=True, verbose_name='Дата регистрации')),
            ],
            options={
                'verbose_name': 'Пользователь',
                'verbose_name_plural': 'Пользователи',
            },
        ),
    ]
