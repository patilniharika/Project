from rest_framework import serializers
from .models import *

class BookTableSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookTable
        fields = ['name', 'person', 'date', 'time', 'phone']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'password', 'phone']

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['phone', 'password']