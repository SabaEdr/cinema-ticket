from django.contrib import admin
from .models import Movie, Cinema, Hall, Showtime, Seat, Reservation

admin.site.register(Movie)
admin.site.register(Cinema)
admin.site.register(Hall)
admin.site.register(Showtime)
admin.site.register(Seat)
admin.site.register(Reservation)

class MovieAdmin(admin.ModelAdmin):
    list_display = ('title', 'director', 'genre', 'release_date', 'poster_image')  # اضافه کردن فیلد تصویر به لیست



