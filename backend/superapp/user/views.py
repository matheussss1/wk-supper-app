from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from .models import Usuario
from .serializers import UserSerializer

class UserCreateAPIView(
    generics.CreateAPIView,
):
    queryset = Usuario.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)

class UserAPIView(
    generics.ListAPIView,
    generics.RetrieveUpdateAPIView,
    generics.RetrieveAPIView
): 
    queryset = Usuario.objects.all()
    serializer_class = UserSerializer
    
class ValidarLinkLoginView(APIView):
    def post(self, request, format=None):
        user =  Usuario.objects.get(id=request.user.id)
        user_token = Token.objects.get(user=user)
        if (user_token):
            user_token.delete()
            token = Token.objects.create(user=user) 
            return Response(token.key)
        return Response(status=status.HTTP_400_BAD_REQUEST)

