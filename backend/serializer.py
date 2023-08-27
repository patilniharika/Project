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
        
class MenuItemImgSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuImg
        fields = ['menu_id', 'img']

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = ['id', 'name', 'description', 'price']

class CartSerializer(serializers.ModelSerializer):
    menu_name = serializers.CharField(source='menu_item.name', read_only=True)
    class Meta:
        model = Cart
        fields = ['menu_item', 'menu_name', 'quantity', 'price']

class CartQuantitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ['quantity', 'price']

