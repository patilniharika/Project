from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializer import *
from django.http import JsonResponse

# new

from rest_framework import generics
from django.http import Http404

import uuid

authenticated = False
 
class BookTableView(APIView):
    serializer_class = BookTableSerializer
    
    def get(self, request):
        data = BookTable.objects.all()
        serializer = BookTableSerializer(data, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        if request.method == 'POST':
            data = {
                'name' : request.data.get('name'),
                'person' : request.data.get('person'),
                'date' : request.data.get('date'),
                'time' : request.data.get('time'),
                'phone' : request.data.get('phone')
            }
        serializer = BookTableSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response("done")

class UserView(APIView):
    serializer_class = UserSerializer

    def post(self, request):
    
        if request.method == 'POST':
            data = {
                'name' : request.data.get('name'),
                'email' : request.data.get('email'),
                'password' : request.data.get('password'),
                'phone' : request.data.get('phone')
            }

        serializer = UserSerializer(data=data)

        if User.objects.filter(email=data['email'], phone=data['phone']).exclude(name=data['name']).exists():
            return Response("The phone number or email is already registered please login or use other.")
        elif User.objects.filter(**data).exists():
            return Response("User already exists please login.")
        else:
            if serializer.is_valid():
                User.objects.create(**data)
            return Response(serializer.data['name'], status=status.HTTP_201_CREATED)

class LoginView(APIView):
    serializer_class = LoginSerializer
    def post(self, request):

        if request.method == 'POST':
            data ={
                'phone' : request.data.get('phone'),
                'password' : request.data.get('password')
            }

        serializer = LoginSerializer(data=data)

        if User.objects.filter(phone= data['phone']).exists():
            pass1 = User.objects.filter(phone= data['phone']).values()
            if pass1[0]['password'] == data['password']:
                return Response([pass1[0]['name'], pass1[0]['id']])
            else :
                return Response(False)
            
        
        if serializer.is_valid():
            return Response(serializer.data)
        return Response("done")
    
class MenuView(APIView):
    def get(self, request):
        if request.method == 'GET':
            data = Menu.objects.all();
            serializer = MenuSerializer(data, many=True)
            return Response(serializer.data)
        
class MenuImgView(APIView):
    def get(self, request):
        if request.method == 'GET':
            data = MenuImg.objects.all();
            serializer = MenuItemImgSerializer(data, many=True) 
            return Response(serializer.data)

    
class MenuImgDetailView(APIView):
    def get_object(self, menu_id):
        try:
            return MenuImg.objects.get(menu_id=menu_id)
        except MenuImg.DoesNotExist:
            raise Http404

    def get(self, request, menu_id, format=None):
        menu_img = self.get_object(menu_id)
        serializer = MenuItemImgSerializer(menu_img)
        return Response(serializer.data)

class CartView(APIView):
    def post(self, request, *args, **kwargs):
        user_id = request.data.get('user_id')
        menu_item_id = request.data.get('menu_item_id')
        quantity = request.data.get('quantity', 1)

        user = User.objects.get(id=user_id)
        menu_item = Menu.objects.get(pk=menu_item_id)
        price = menu_item.price
        total_price = price * quantity

        cart_item, created = Cart.objects.get_or_create(user_id=user, menu_item=menu_item, defaults={'price': total_price})

        if not created:
            cart_item.quantity += quantity
            cart_item.price += total_price
            cart_item.save()
        else:
            cart_item.quantity = quantity  # Set the initial quantity
            cart_item.price = total_price   # Set the initial price
            cart_item.save()
        if(quantity == -1):
            return Response("Removed from Cart")
        return Response("Added to Cart")

    def delete(self, request):
        user_id = request.data.get('user_id')
        menu_item_id = request.data.get('menu_item_id')

        try:
            cart_item = Cart.objects.get(user_id=user_id, menu_item_id=menu_item_id)
            cart_item.delete()
            return Response("Removed from Cart")
        except Cart.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    def get(self, request):
        user_id = request.query_params.get('user_id') # Get the user_id from the request

        cart_items = Cart.objects.filter(user_id=user_id)  # Fetch cart items for the given user_id

        # cart_data = []

        # for item in cart_items:
        #     cart_data.append(item)
        serializer = CartSerializer(cart_items, many=True)
        return Response(serializer.data)
    
class CartDetailView(APIView):
    def get(self, request):
        menu_id = request.query_params.get('menu_id')
        user_id = request.query_params.get('user_id')

        menu_item = Menu.objects.get(pk=menu_id)

        cart_items = Cart.objects.filter(user_id=user_id, menu_item=menu_id)  # Fetch cart items for the given user_id
        if cart_items:
            serializer = CartQuantitySerializer(cart_items, many=True)
            return Response(serializer.data)
        else:
            serializer = CartQuantitySerializer([{'quantity': 0, 'price': menu_item.price}], many=True)
            return Response(serializer.data)
        
class CartQuantityView(APIView):
    def get(self, request):

        quantity = 0
        price = 0.0
        user_id = request.query_params.get('user_id')

        cart_items = Cart.objects.filter(user_id=user_id)
        if cart_items:
            for item in cart_items:
                quantity += item.quantity
                price += float(item.price)
                serializer = CartQuantitySerializer([{'quantity': quantity, 'price': price}], many=True)
            return Response(serializer.data)
        else:
            serializer = CartQuantitySerializer([{'quantity': 0, 'price': 0.0}], many=True)
            return Response(serializer.data)