from django.shortcuts import render, redirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import Http404
from .models import Movie
from .serializers import NoteSerializer

# SUAS OUTRAS FUNÇÕES CONTINUAM AQUI

# Getting movie by id:
@api_view(['GET', 'POST'])
def api_movie(request, id):
    try:
        movie = Movie.objects.get(id=id)
    except Movie.DoesNotExist:
        raise Http404()
    if request.method == 'POST':
        new_note_data = request.data
        movie.title = new_note_data['title']
        movie.save()
    serialized_movie = NoteSerializer(movie)
    return Response(serialized_movie.data)

# Favoritando filme:
@api_view(['GET', 'POST'])
def api_favoritar(request):
    if request.method == 'POST':
        movie = Movie.objects
        
        serialized_movie = NoteSerializer(movie)
        newMovie = request.data
        movie.title = newMovie['title']
        movie.save()
    serialized_movie = NoteSerializer(movie)
    return Response(serialized_movie.data)

# Getting all favorite movies:
@api_view(['GET', 'POST'])
def api_all_movies(request):
    if request.method == 'GET':
        movie = Movie.objects
        serialized_movie = NoteSerializer(movie, many=True)
        return Response(serialized_movie.data)