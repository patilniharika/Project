from django.db import models
import uuid
from django.core.validators import RegexValidator

# Create your models here.

class BookTable(models.Model):
    phone_regex = RegexValidator(regex=r'^\d{10}$', message="Enter numbers upto 10-digits allowed")
    name = models.CharField(max_length=100)
    person = models.PositiveIntegerField()
    date = models.DateField()
    time = models.TimeField()
    phone = models.CharField(validators=[phone_regex], max_length=10)

class User(models.Model):
    phone_regex = RegexValidator(regex=r'^\d{10}$', message="Enter numbers upto 10-digits allowed")
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=255)
    phone = models.CharField(validators=[phone_regex], max_length=10)