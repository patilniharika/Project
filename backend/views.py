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
        return "done"

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
        if serializer.is_valid():
            serializer.save()
            authenticated = True
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return "done"

    def get(self, request):
        data = User.objects.all()
        serializer = UserSerializer(data, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
     