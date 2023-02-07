from django.urls import path #path function
from . import views # . is shorthand for the current directory

# one urlpattern per line
urlpatterns = [
    path('signup', views.signup, name='signup'),
    path('login', views.connect, name='connect'),
    path('logout', views.deconnect, name='deconnect'),
    path('profile/<str:nom>', views.profile, name='profile'),

]