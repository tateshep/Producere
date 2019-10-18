from rest_framework import generics
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Todo

from .serializers import TodoSerializer

from django.shortcuts import render
from django.http import Http404


class ListTodo(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


# class ListTodo(APIView):
    
#     def get(self, request, format=None):
#         Todos = Todo.objects.all()
#         serializer = TodoSerializer(Todos, many=True)
#         return Response(serializer.data)
    
#     def post(self, request, format=None):
#         serializer = TodoSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    


class DetailTodo(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

