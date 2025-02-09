


# urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.api_home, name='api_home'),
    path('rooms/available/', views.available_rooms, name='available_rooms'),
    path('room/book/', views.book_room, name='book_room'),
    path('room/bookings/', views.user_bookings, name='user_bookings'),
    path('room/bookings/<int:booking_id>/', views.update_booking, name='update_booking'),
    path('room/bookings/cancel/<int:booking_id>/', views.cancel_booking, name='cancel_booking'),
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('profile/', views.profile, name='profile'),
    path('change-password/', views.change_password, name='change_password'),
]
