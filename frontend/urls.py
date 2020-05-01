from django.urls import path

from .views import index, UserWordDetailView

urlpatterns = [
    path('', index),
    path('edit/<int:pk>', UserWordDetailView.as_view()),
    path('delete/<int:pk>', UserWordDetailView.as_view()),
]