from django.db import models

# Create your models here.

class Gif(models.Model):
    title = models.CharField(max_length=30)
    url = models.URLField()
    uploader_name = models.FloatField()
    created_at = models.FloatField()
    created_at = models.DateField(auto_now_add=True)

class Category(models.Model):
	name = models.CharField(max_length=30)
	gif = models.ManyToManyField(Gif)


