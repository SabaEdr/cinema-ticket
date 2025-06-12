from rest_framework.decorators import api_view
from rest_framework.response import Response
from tickets.models import Movie, Cinema, Showtime
from tickets.serializers import MovieSerializer, CinemaSerializer,ShowtimeSerializer
from django.shortcuts import get_object_or_404

@api_view(['GET'])
def movie_list(request):
    movies = Movie.objects.all()
    serializer = MovieSerializer(movies, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def now_showing_movies(request):
    movies = Movie.objects.filter(is_showing=True)
    serializer = MovieSerializer(movies, many=True, context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
def cinema_list(request):
    cinemas = Cinema.objects.all()
    serializer = CinemaSerializer(cinemas, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def movie_details(request, movie_id):
    movie = get_object_or_404(Movie, pk=movie_id)
    serializer = MovieSerializer(movie, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def cinema_details(request, cinema_id):
    cinema = get_object_or_404(Cinema, pk=cinema_id)
    serializer = CinemaSerializer(cinema)
    return Response(serializer.data)

@api_view(['GET'])
def movie_showtimes(request, movie_id):
    movie = get_object_or_404(Movie, pk=movie_id)
    showtimes = Showtime.objects.filter(movie=movie)
    serializer = ShowtimeSerializer(showtimes, many=True)
    return Response(serializer.data)



