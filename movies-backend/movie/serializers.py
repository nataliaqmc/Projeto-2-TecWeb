from rest_framework import serializers
from .models import Movie


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ['id', 'title']
        