from rest_framework import serializers

from .models import UserWord


class UserWordSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserWord
        fields = '__all__'