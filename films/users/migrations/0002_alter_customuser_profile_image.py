# Generated by Django 4.1.5 on 2023-02-13 17:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='profile_image',
            field=models.ImageField(height_field=100, null=True, upload_to='media/profile_users/', verbose_name='Фото пользователя', width_field=100),
        ),
    ]