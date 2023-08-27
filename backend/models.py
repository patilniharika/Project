from django.db import models
import uuid
from django.core.validators import RegexValidator

# for menu image model
from django.db.models.signals import pre_save
from django.dispatch import receiver

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
    phone = models.CharField(validators=[phone_regex], max_length=10, unique=True)

class Menu(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    price = models.DecimalField(max_digits=10, decimal_places=2)

class Cart(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    menu_item = models.ForeignKey(Menu, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    price = models.DecimalField(max_digits=10, decimal_places=2)

class MenuImg(models.Model):
    menu_id = models.ForeignKey(Menu, on_delete=models.CASCADE)
    img = models.ImageField(upload_to='media/')
    name = models.CharField(max_length=255, blank=True, editable=False)

@receiver(pre_save, sender=MenuImg)
def update_menu_img_name(sender, instance, **kwargs):
    instance.name = instance.menu_id.name