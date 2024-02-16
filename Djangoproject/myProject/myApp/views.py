from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request): #new
    return HttpResponse('<h1>Django Include URLs </h1>')