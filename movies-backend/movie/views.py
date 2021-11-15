from django.shortcuts import render, redirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import Http404
from .models import Movie
from .serializers import NoteSerializer

# SUAS OUTRAS FUNÇÕES CONTINUAM AQUI

@api_view(['GET', 'POST'])
def api_movie(request, movie_id):
    try:
        movie = Movie.objects.get(id=movie_id)
    except Movie.DoesNotExist:
        raise Http404()
    if request.method == 'POST':
        new_note_data = request.data
        movie.title = new_note_data['title']
        movie.save()
    serialized_movie = NoteSerializer(movie)
    return Response(serialized_movie.data)