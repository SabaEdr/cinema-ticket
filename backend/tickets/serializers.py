from rest_framework import serializers
from .models import Movie, Cinema

class MovieSerializer(serializers.ModelSerializer):
    poster_url = serializers.SerializerMethodField()

    class Meta:
        model = Movie
        fields = ['id', 'title', 'director', 'description', 'release_date', 'poster_url']

    def get_poster_url(self, obj):
        request = self.context.get('request')
        if obj.poster_image:
            return request.build_absolute_uri(obj.poster_image.url)
        return None

class CinemaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cinema
        fields = ['id', 'name', 'city']

from .models import Showtime

class ShowtimeSerializer(serializers.ModelSerializer):
    cinema_name = serializers.CharField(source='cinema.name')

    class Meta:
        model = Showtime
        fields = ['id', 'cinema_name', 'start_time']





