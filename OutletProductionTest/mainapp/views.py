from django.shortcuts import render

# Create your views here.
def index(request,id=1):
    return render(request,'index.html',{})