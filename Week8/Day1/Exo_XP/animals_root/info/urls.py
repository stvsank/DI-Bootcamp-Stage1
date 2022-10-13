from django.urls import path
from . import views

urlpatterns = [
    path('family/', views.famille, name='famille'),
    path('animal/', views.animal, name='animal'),
]
