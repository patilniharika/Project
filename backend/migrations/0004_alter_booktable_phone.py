# Generated by Django 4.0.2 on 2023-01-24 08:49

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_alter_user_phone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booktable',
            name='phone',
            field=models.CharField(max_length=10, validators=[django.core.validators.RegexValidator(message='Enter numbers upto 10-digits allowed', regex='^\\d{10}$')]),
        ),
    ]