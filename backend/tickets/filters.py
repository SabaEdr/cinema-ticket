# backend/tickets/filters.py

import django_filters
from .models import Movie, Cinema

class MovieFilter(django_filters.FilterSet):
    title = django_filters.CharFilter(field_name='title', lookup_expr='icontains')  # فیلتر بر اساس نام فیلم
    genre = django_filters.CharFilter(field_name='genre', lookup_expr='icontains')  # فیلتر بر اساس ژانر
    cinema = django_filters.ModelChoiceFilter(queryset=Cinema.objects.all())  # فیلتر بر اساس سینما

    class Meta:
        model = Movie
        fields = ['title', 'genre', 'cinema']

