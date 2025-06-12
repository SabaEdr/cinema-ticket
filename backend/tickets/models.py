from django.db import models

from django.db import models

class Movie(models.Model):

    title = models.CharField(max_length=100)  # نام فیلم
    director = models.CharField(max_length=100)
    genre = models.CharField(max_length=100)  
    duration = models.IntegerField()  
    release_date = models.DateField()  
    description = models.TextField()  
    poster_image = models.ImageField(upload_to='movie_posters/', null=True, blank=True)  # فیلد جدید برای تصویر پوستر فیلم
    is_showing = models.BooleanField(default=True)
    def __str__(self):
        return self.title

    

class Cinema(models.Model):

    name = models.CharField(max_length=100)
    city = models.CharField(max_length=100, default='Urmia')  # This is fine if city should default to 'Urmia'
    capacity = models.IntegerField(default=100)
    contact_number = models.CharField(max_length=20, default='000')  # Removed null=True
    addr = models.TextField(default='Urmia')  # This is fine if address should default to 'Urmia'

    def __str__(self):
        return self.name


    
class Showtime(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    cinema = models.ForeignKey(Cinema , on_delete=models.CASCADE)
    start_time = models.DateTimeField()
    price = models.IntegerField(null= True)
    salable_seats = models.IntegerField(null= True)
    free_seats = models.IntegerField(null = True)

    SALE_NOT_STARTED = 1
    SALE_OPEN = 2
    TICKETS_SOLD = 3
    SALE_CLOSED = 4
    MOVIE_PLAYED = 5
    SHOW_CANCELED = 6

    status_choices = (
        (SALE_NOT_STARTED, 'فروش آغاز نشده'),
        (SALE_OPEN, 'در حال فروش بلیت'),
        (TICKETS_SOLD, 'بلیت‌ها تمام شد'),
        (SALE_CLOSED, 'فروش بلیت بسته شد'),
        (MOVIE_PLAYED, 'فیلم پخش شد'),
        (SHOW_CANCELED, 'سانس لغو شد'),
    )
    status = models.IntegerField('وضعیت', choices=status_choices, default=SALE_NOT_STARTED)

    def __str__(self):
        return f"{self.movie.title} - {self.cinema.name} - {self.start_time}"

    def get_price(self):
        return f"{self.price} تومان"

    def is_full(self):
        return self.free_seats == 0



