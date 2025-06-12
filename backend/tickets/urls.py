from django.urls import path, include
from tickets import views
urlpatterns = [
path('movie/list', views.movie_list),
path('movie/details/<int:movie_id>', views.movie_details),
path('movie/now-showing/', views.now_showing_movies, name='now_showing_movies'),
path('cinema/list', views.cinema_list),
path('cinema/details/<int:cinema_id>', views.cinema_details),
path('movies/<int:movie_id>/showtimes/', views.movie_showtimes, name='movie_showtimes'),
]