from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token  

from .views import (
    UserCreateAPIView,
    ValidarLinkLoginView
)

urlpatterns = [
    path('user/', UserCreateAPIView.as_view(), name='user'),
    path('login/', ValidarLinkLoginView.as_view(), name='login'),
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
]
