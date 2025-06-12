from django.contrib import admin
from .models import Movie, Cinema, Showtime

admin.site.register(Movie)
admin.site.register(Cinema)
admin.site.register(Showtime)

#user:admin pass:123
class MovieAdmin(admin.ModelAdmin):
    list_display = ('title', 'director', 'genre', 'release_date', 'poster_image')  # اضافه کردن پوستر به لیست
