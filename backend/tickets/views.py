from django.shortcuts import render
from rest_framework import viewsets
from tickets.models import Movie
from tickets.serializers import MovieSerializer
from tickets.models import Movie 

from rest_framework import viewsets
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Movie
from .serializers import MovieSerializer
from .filters import MovieFilter

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter)  
    filterset_class = MovieFilter  
    ordering_fields = ['release_date', 'title']
                       



