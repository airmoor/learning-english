from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import viewsets

from .serializers import UserWordSerializer
from .models import UserWord

# from rest_framework.decorators import api_view
# from rest_framework.response import Response



class UserWordViewSet(viewsets.ModelViewSet):
    queryset = UserWord.objects.all()
    serializer_class = UserWordSerializer





