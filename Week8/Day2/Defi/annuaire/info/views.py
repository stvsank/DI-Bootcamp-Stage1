from django.shortcuts import render
from django.http import HttpResponse
from info.models import Persons
from phonenumber_field.formfields import PhoneNumberField

def info(request, phonenumber):
	context = {
		'persons' : Persons.objects.all()
	}
	p1 = Persons(name = 'aaa', email = 'aaa@gmail.com', address = 'rue...')
	p1.phonenumber = phonenumber
	context.update({'phonenumber': p1.phonenumber})
	context.update({'name': None})
	return render(request, "info/index.html", context)

def infos(request, name):
	context = {
		'persons' : Persons.objects.all()
	}
	context.update({'name': name})
	context.update({'phonenumber': None})
	return render(request, "info/index.html", context)