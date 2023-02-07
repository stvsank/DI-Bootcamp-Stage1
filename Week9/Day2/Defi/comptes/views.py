from django.shortcuts import render
from .forms import SignupForm, LoginForm
from django.contrib.auth.models import User 
from django.shortcuts import redirect
from films.views import homepage
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse

# Create your views here.

def signup(request):
	if request.method=="POST":
		form = SignupForm(request.POST)
		if form.is_valid():
			form.save()
			return HttpResponse('<h1>SUCCES</h1>')
		else :
			return redirect(signup)
	else:
		context = { 'form' : SignupForm()}
		return render(request,'signup.html',context)
	    

def connect(request):
	if request.method=="POST":
		username = request.POST['username']
		password = request.POST['password']
		user = authenticate(request, username=username, password=password)
		if user is not None:
		    login(request, user)
		    return redirect(homepage)
		else:
			return redirect(signup)
	else:
		context = { 'form' : LoginForm()}
		return render(request,'login.html',context)


def deconnect(request):
	logout(request)
	return redirect(homepage)


def profile(request, nom):
	print(nom,"yuio")
	user = User.objects.get(username=nom)
	print(user)
	context={'all' : user}
	return render(request,'profile.html', context)
