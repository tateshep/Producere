from rest_framework import serializers
from .models import Quest, Journey

class QuestSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'description',
            'author',
            'created_date',
            'due_date',
            'journeys',
        )
        model = Quest


class JourneySerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'description',
            'author',
            'created_date',
            'due_date',
        )
        model = Journey