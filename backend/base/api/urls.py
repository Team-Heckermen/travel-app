from django.urls import path
from . import views
from .views import MyTokenObtainPairView, RegisterView, VerifyEmail

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('', views.getRoutes),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='user_register'),
    path('email-verify/', VerifyEmail.as_view(), name='email-verify'),
]
