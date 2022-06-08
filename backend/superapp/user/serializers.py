from rest_framework import serializers
from rest_framework.authtoken.models import Token
from .models import Usuario

class UserSerializer(serializers.ModelSerializer):
    token = serializers.SerializerMethodField('get_auth_token')

    class Meta:
        model = Usuario
        fields = ['token', 'username', 'password', 'cpf', 'telefone', 'data_nascimento', 'id', 'nome']

    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

    def get_auth_token(self, objc):
        try:
            token = Token.objects.create(user_id=objc.id)
            return token.key
        except: 
            return ""

        