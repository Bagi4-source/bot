from rest_framework import serializers
from . import models


class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = [
            'pk',
            'telegram_id',
            'name',
            'subscription_end',
            'create_time',
            'update_time'
        ]
        read_only_fields = [
            'create_time',
            'update_time'
        ]


class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Request
        fields = [
            'pk',
            'telegram_id',
            'amount',
            'status',
            'create_time',
            'update_time'
        ]
        read_only_fields = [
            'create_time',
            'update_time'
        ]
