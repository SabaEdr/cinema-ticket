from django.shortcuts import render
from rest_framework import viewsets
from tickets.models import Movie
from tickets.serializers import MovieSerializer
from tickets.models import Movie 
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Showtime, Movie
from .serializers import ShowtimeSerializer
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
                       

class ShowtimeViewSet(viewsets.ModelViewSet):  
    queryset = Showtime.objects.all()
    serializer_class = ShowtimeSerializer

    @action(detail=True, methods=['get'])
    def movie_showtimes(self, request, pk=None):
        
        try:
            movie = Movie.objects.get(pk=pk)
        except Movie.DoesNotExist:
            return Response({"error": "Movie not found"}, status=404)

        showtimes = Showtime.objects.filter(movie=movie)
        serializer = self.get_serializer(showtimes, many=True)
        return Response(serializer.data)



