from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializer import *
from django.http import JsonResponse

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
                return Response(pass1[0]['name'])
            else :
                return Response(False)
            
        
        if serializer.is_valid():
            return Response(serializer.data)
        return Response("done")
            
     