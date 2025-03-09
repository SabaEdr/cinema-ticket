from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=255)  
    director = models.CharField(max_length=255)  
    genre = models.CharField(max_length=100)  
    duration = models.IntegerField()  
    release_date = models.DateField()  
    description = models.TextField()  

    def __str__(self):
        return self.title
    

class Cinema(models.Model):
    name = models.CharField(max_length=255)  
    location = models.CharField(max_length=255)  
    contact_number = models.CharField(max_length=20, blank=True)  

    def __str__(self):
        return self.name

class Hall(models.Model):
    cinema = models.ForeignKey(Cinema, on_delete=models.CASCADE)  
    name = models.CharField(max_length=100)  
    total_seats = models.IntegerField()  

    def __str__(self):
        return f"{self.name} - {self.cinema.name}"
    
class Showtime(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)  
    cinema = models.ForeignKey(Cinema, on_delete=models.CASCADE)  # سینما
    hall = models.ForeignKey(Hall, on_delete=models.CASCADE)  
    start_time = models.DateTimeField()  
    end_time = models.DateTimeField()  

    def __str__(self):
        return f"{self.movie.title} - {self.cinema.name} - {self.start_time}"
    

class Seat(models.Model):
    hall = models.ForeignKey(Hall, on_delete=models.CASCADE)  
    seat_number = models.CharField(max_length=10)  
    is_vip = models.BooleanField(default=False)  
    is_reserved = models.BooleanField(default=False)  

    def __str__(self):
        return f"{self.seat_number} - {self.hall.name} ({self.hall.cinema.name})"


from django.contrib.auth.models import User  # وارد کردن مدل User

class Reservation(models.Model):
    showtime = models.ForeignKey(Showtime, on_delete=models.CASCADE)  # سانس نمایش
    seat = models.ForeignKey(Seat, on_delete=models.CASCADE)  
    user = models.ForeignKey(User, on_delete=models.CASCADE) 
    booked_at = models.DateTimeField(auto_now_add=True)  

    def __str__(self):
        return f"{self.user.username} - {self.showtime.movie.title} - {self.seat.seat_number}"




# Create your models here.
