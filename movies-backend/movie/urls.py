from django.urls import path

from . import views

urlpatterns = [
    path('api/movie/', views.api_all_movies),
    path('api/movie/<str:movie_id>/', views.api_movie),
    path('api/movie/favoritar/', views.api_favoritar),
]