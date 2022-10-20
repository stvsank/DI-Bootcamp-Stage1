from django.urls import path
from . import views

urlpatterns = [
  path('family/<int:X>', views.randomq, name='randomq'),
  path('animal/<int:X>/', views.question, name='question'),
  path('animals/', views.questions, name='questions')
]