# serializers.py

from rest_framework import serializers
from .models import Room, Booking
from django.contrib.auth.models import User
from django.contrib.auth import password_validation
from rest_framework.validators import UniqueValidator

# Serializer for Room model
class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'  

# Serializer for Booking model
class BookingSerializer(serializers.ModelSerializer):
    room = RoomSerializer()  # Nested serializer for room details
    user = serializers.StringRelatedField()  # Display user as a string (you could also use user details here)

    class Meta:
        model = Booking
        fields = '__all__' 
# Serializer for User Registration
class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[password_validation.validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password2']
        extra_kwargs = {
            'email': {'validators': [UniqueValidator(queryset=User.objects.all())]}
        }

    def validate(self, data):
        if data['password'] != data['password2']:
            raise serializers.ValidationError("Passwords do not match")
        return data

    def create(self, validated_data):
        validated_data.pop('password2')
        user = User.objects.create_user(**validated_data)
        return user


# Serializer for User Profile
class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']


# Serializer for Password Change
class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(write_only=True)
    new_password = serializers.CharField(write_only=True, required=True)
    new_password2 = serializers.CharField(write_only=True, required=True)

    def validate(self, data):
        if data['new_password'] != data['new_password2']:
            raise serializers.ValidationError("New passwords do not match")
        return data
