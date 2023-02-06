from django.contrib import admin
from .models import Country,Category,Director,Film

# Register your models here.
admin.site.register(Country)
admin.site.register(Category)
admin.site.register(Director)
admin.site.register(Film)