from rest_framework import generics

from .models import Quest, Journey

from .serializers import QuestSerializer, JourneySerializer

from django.shortcuts import render


class ListQuest(generics.ListCreateAPIView):
    queryset = Quest.objects.all()
    serializer_class = QuestSerializer


class DetailQuest(generics.RetrieveUpdateDestroyAPIView):
    queryset = Quest.objects.all()
    serializer_class = QuestSerializer

class ListJourney(generics.ListCreateAPIView):
    queryset = Journey.objects.all()
    serializer_class = JourneySerializer


class DetailJourney(generics.RetrieveUpdateDestroyAPIView):
    queryset = Journey.objects.all()
    serializer_class = JourneySerializer