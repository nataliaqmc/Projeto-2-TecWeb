from django.urls import path

from . import views

urlpatterns = [
    path('api/movie/<int:movie_id>/', views.api_movie),
]