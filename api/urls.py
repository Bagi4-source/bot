from django.urls import include, path, re_path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('registration', views.RegistrationView)
router.register('request', views.RequestView)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]