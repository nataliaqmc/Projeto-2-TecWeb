from django.shortcuts import render, redirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import Http404
from .models import Movie
from .serializers import NoteSerializer

# SUAS OUTRAS FUNÇÕES CONTINUAM AQUI

# Getting movie by id:
@api_view(['GET', 'POST'])
def api_movie(request,movie_id,movie_title):
    if request.method == 'POST':
        try:
            Movie.objects.get(imdb_id=movie_id)
        except:
            Movie.objects.create(title=movie_title,imdb_id=movie_id)
    movie = Movie.objects
    movie.title = movie_title
    movie.imdb_id = movie_id
    serialized_movie = NoteSerializer(Movie.objects)
    return Response(serialized_movie.data)

# Favoritando filme:
@api_view(['GET', 'POST','DELETE'])
def api_delete(request,movie_id, movie_title):
    if request.method == 'POST':
        Movie.objects.delete(id=9)
        
    movie = Movie.objects
    movie.title = movie_title
    movie.imdb_id = movie_id
    serialized_movie = NoteSerializer(Movie.objects)
    return Response(serialized_movie.data)

# Getting all favorite movies:
@api_view(['GET', 'POST'])
def api_all_movies(request):
    if request.method == 'GET':
        movie = Movie.objects
        serialized_movie = NoteSerializer(movie, many=True)
        return Response(serialized_movie.data)