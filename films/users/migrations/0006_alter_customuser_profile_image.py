# Generated by Django 4.1.5 on 2023-02-13 18:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_alter_customuser_profile_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='profile_image',
            field=models.ImageField(blank=True, height_field=100, null=True, upload_to='profile_users/', verbose_name='Фото пользователя', width_field=100),
        ),
    ]
