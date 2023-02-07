from django.shortcuts import render
from .forms import AddFilmForm, AddDirectorForm
from .models import Film, Director
from django.shortcuts import redirect

# Create your views here.

def homepage(request):
	vrai = True
	if not request.user.is_authenticated:
		vrai = False
	context={'all': Film.objects.all(),'vrai':vrai}
	return render(request,'partials/homepage.html', context)


def addFilm(request):
	if request.method=="POST":
	    form = AddFilmForm(request.POST)
	    if form.is_valid():
	        form.save()
	        return redirect(homepage)
	    else:
	        form = AddFilmForm()
	        return render(request, 'film/addFilm.html', {"form":form})
	else:
	    form = AddFilmForm()
	    return render(request, 'film/addFilm.html', {"form":form})



def addDirector(request):
	if request.method=="POST":
	    form = AddDirectorForm(request.POST)
	    if form.is_valid():
	        form.save()
	        return redirect(addFilm)
	    else:
	        form = AddDirectorForm()
	        return render(request, 'director/AddDirector.html', {"form":form})
	else:
	    form = AddDirectorForm()
	    return render(request, 'director/AddDirector.html', {"form":form})
