# este é o arquivo equivalente ao getit/urls.py

from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('movie.urls')),
]