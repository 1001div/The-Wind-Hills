import stripe
from django.conf import settings
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import Room
from .serializers import RoomSerializer, BookingSerializer
from .serializers import UserRegistrationSerializer, UserProfileSerializer, ChangePasswordSerializer

def api_home(request):
    return JsonResponse({"message": "Welcome to The Wind Hills API"})


# Create your views here.
# api/views.py

# views.py



# Get available rooms
@api_view(['GET'])
def available_rooms(request):
    rooms = Room.objects.filter(available=True)
    serializer = RoomSerializer(rooms, many=True)
    return Response(serializer.data)

# Book a room
# Book a room
@api_view(['POST'])
def book_room(request):
    room_id = request.data.get('room_id')
    check_in_date = request.data.get('check_in_date')
    check_out_date = request.data.get('check_out_date')
    
    room = get_object_or_404(Room, id=room_id)

    if not room.available:
        return Response({"error": "Room not available"}, status=status.HTTP_400_BAD_REQUEST)

    # Create a booking
    booking = Booking.objects.create(
        user=request.user, 
        room=room, 
        check_in_date=check_in_date, 
        check_out_date=check_out_date
    )

    # Mark room as unavailable after booking
    room.available = False
    room.save()

    serializer = BookingSerializer(booking)
    return Response(serializer.data, status=status.HTTP_201_CREATED)


# Get all user bookings
@api_view(['GET'])
def user_bookings(request):
    bookings = Booking.objects.filter(user=request.user)
    serializer = BookingSerializer(bookings, many=True)
    return Response(serializer.data)

# Update booking
@api_view(['PUT'])
def update_booking(request, booking_id):
    booking = get_object_or_404(Booking, id=booking_id, user=request.user)
    serializer = BookingSerializer(booking, data=request.data, partial=True)
    
    if serializer.is_valid():
        updated_booking = serializer.save()
        return Response(BookingSerializer(updated_booking).data)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Cancel booking
@api_view(['DELETE'])
def cancel_booking(request, booking_id):
    booking = get_object_or_404(Booking, id=booking_id, user=request.user)
    booking.status = 'cancelled'
    booking.room.available = True  # Mark room available again after cancellation
    booking.room.save()
    booking.save()
    return Response({"message": "Booking cancelled successfully"}, status=status.HTTP_204_NO_CONTENT)

# User Registration API
@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def register(request):
    if request.method == 'POST':
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({"message": "User registered successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# User Login API (JWT Token)
@api_view(['POST'])
@permission_classes([permissions.AllowAny])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    
    if user:
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        return Response({"access_token": access_token}, status=status.HTTP_200_OK)
    
    return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

# User Profile API
@api_view(['GET', 'PUT'])
@permission_classes([permissions.IsAuthenticated])
def profile(request):
    user = request.user
    if request.method == 'GET':
        serializer = UserProfileSerializer(user)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = UserProfileSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Profile updated successfully!"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# Change Password API
@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def change_password(request):
    user = request.user
    serializer = ChangePasswordSerializer(data=request.data)
    if serializer.is_valid():
        if not user.check_password(serializer.data['old_password']):
            return Response({"error": "Old password is incorrect."}, status=status.HTTP_400_BAD_REQUEST)
        
        user.set_password(serializer.data['new_password'])
        user.save()
        return Response({"message": "Password changed successfully!"}, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Set your secret key
stripe.api_key = settings.STRIPE_TEST_SECRET_KEY

@api_view(['POST'])
def create_payment_intent(request):
    try:
        booking_id = request.data.get('booking_id')
        amount = request.data.get('amount')  # This should be the price of the booking (e.g., room price)
        
        booking = Booking.objects.get(id=booking_id)
        
        # Create PaymentIntent with amount and currency (USD or your currency)
        payment_intent = stripe.PaymentIntent.create(
            amount=int(amount * 100),  # Stripe requires the amount in cents
            currency='usd',  # Change to your currency code
            metadata={'booking_id': booking.id, 'user_id': booking.user.id}
        )

        # Send client secret to the frontend for further processing
        return Response({
            'clientSecret': payment_intent.client_secret,
            'paymentIntentId': payment_intent.id
        }, status=status.HTTP_200_OK)
    
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

