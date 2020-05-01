from django.shortcuts import render

from django.views.generic.detail import DetailView

from words.models import UserWord


def index(request):
    return render(request, 'frontend/index.html')


class UserWordDetailView(DetailView):
    model = UserWord
    template_name = 'frontend/index.html'