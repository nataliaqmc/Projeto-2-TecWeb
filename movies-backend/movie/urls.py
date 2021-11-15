from django.urls import path

from . import views

urlpatterns = [
    path('api/movie/', views.api_all_movies),
    path('api/movie/<str:movie_title>/<str:movie_id>/', views.api_movie),
    path('api/movie/delete/<str:movie_title>/<str:movie_id>/', views.api_delete),
]