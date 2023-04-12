from rest_framework import viewsets, mixins, generics
from django.shortcuts import get_object_or_404
from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly
from .models import User, Request
from . import serializers
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.http import JsonResponse


class RegistrationView(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin,
                       mixins.CreateModelMixin, mixins.UpdateModelMixin):
    permission_classes = [AllowAny]
    serializer_class = serializers.RegistrationSerializer
    queryset = User.objects.all()

    def get_queryset(self):
        telegram_id = self.request.GET.get('telegram_id', None)
        if telegram_id:
            return User.objects.filter(telegram_id=telegram_id)
        else:
            return User.objects.all()


class RequestView(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.CreateModelMixin,
                  mixins.UpdateModelMixin):
    permission_classes = [AllowAny]
    serializer_class = serializers.RequestSerializer
    queryset = Request.objects.all()

    def get_queryset(self):
        telegram_id = self.request.GET.get('telegram_id', None)
        if telegram_id:
            return Request.objects.filter(telegram_id=telegram_id)
        else:
            return Request.objects.all()
