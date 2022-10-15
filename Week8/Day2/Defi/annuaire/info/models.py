from django.db import models
from phonenumber_field.formfields import PhoneNumberField

class Persons(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    email = models.CharField(max_length=50, unique=True)
    phonenumber = PhoneNumberField(region='CA')
    address = models.CharField(max_length=40)



    
   