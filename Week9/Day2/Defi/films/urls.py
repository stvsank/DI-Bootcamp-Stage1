from django.urls import path #path function
from . import views # . is shorthand for the current directory

# one urlpattern per line
urlpatterns = [
    path('homepage', views.homepage, name='homepage'),
    path('addFilm', views.addFilm, name='addFilm'),
    path('addDirector', views.addDirector, name='addDirector'),

]