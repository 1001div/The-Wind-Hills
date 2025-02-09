# Create your models here.
import datetime
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

from django.db import models

class Room(models.Model):
    ROOM_TYPES = [
        ('single', 'Single'),
        ('double', 'Double'),
        ('suite', 'Suite'),
        ('deluxe', 'Deluxe'),
    ]

    name = models.CharField(max_length=100, unique=True)  # Unique room name
    description = models.TextField()
    room_type = models.CharField(max_length=20, choices=ROOM_TYPES, default='single')
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Room price per night
    capacity = models.IntegerField()  # Number of guests allowed
    available = models.BooleanField(default=True)  # Is the room available?
    image = models.ImageField(upload_to='room_images/', blank=True, null=True)  # Room image
    amenities = models.TextField(blank=True, help_text="Comma-separated list of amenities")  # Extra features
    created_at = models.DateTimeField(default=datetime.datetime.now)  # Add a default value
    updated_at = models.DateTimeField(auto_now=True)  # Timestamp for last update

    def __str__(self):
        return f"{self.name} ({self.room_type})"

    def is_available(self):
        return self.available



class Booking(models.Model):
    user = models.ForeignKey(User, related_name='bookings', on_delete=models.CASCADE)
    room = models.ForeignKey(Room, related_name='bookings', on_delete=models.CASCADE)
    check_in_date = models.DateField()
    check_out_date = models.DateField()
    status = models.CharField(max_length=20, choices=[('booked', 'Booked'), ('cancelled', 'Cancelled')], default='booked')

    def __str__(self):
        return f"Booking for {self.room.name} by {self.user.username}"
    

class Payment(models.Model):
    user = models.ForeignKey(User, related_name="payments", on_delete=models.CASCADE)
    booking = models.ForeignKey(Booking, related_name="payments", on_delete=models.CASCADE)  # ✅ FIXED: Removed 'rooms.'
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_status = models.CharField(max_length=100)
    transaction_id = models.CharField(max_length=255, unique=True)
    payment_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"Payment of {self.amount} for booking {self.booking.id} by {self.user.username}"
