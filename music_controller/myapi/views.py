from django.shortcuts import render
from rest_framework import generics
from .serializers import RoomSeliarizer
from .models import Room
# Create your views here.


class RoomView(generics.CreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSeliarizer
