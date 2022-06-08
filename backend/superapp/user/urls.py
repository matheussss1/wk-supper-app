from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token  
from rest_framework.routers import SimpleRouter

from .views import (
    UserCreateAPIView,
    ValidarLinkLoginView
)

router = SimpleRouter(trailing_slash=False)

router.register(r'user', UserCreateAPIView, basename='user')

urlpatterns = [
    path("", include(router.urls)),
    path('login/', ValidarLinkLoginView.as_view(), name='login'),
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
]
