# Generated by Django 4.0.2 on 2023-02-10 07:07

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0009_alter_menu_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='menu',
            name='id',
            field=models.UUIDField(default=uuid.UUID('da7db387-8eb6-4d66-8dac-1e011fc509d4'), editable=False, primary_key=True, serialize=False),
        ),
    ]
