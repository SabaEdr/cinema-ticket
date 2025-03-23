
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from tickets.views import MovieViewSet, ShowtimeViewSet


router = DefaultRouter()
router.register(r'movies', MovieViewSet)
router.register(r'showtimes', ShowtimeViewSet, basename='showtime')

urlpatterns = [
    path('', include(router.urls)),  
    path('admin/', admin.site.urls),  
]






