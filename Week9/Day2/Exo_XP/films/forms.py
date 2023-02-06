from django import forms
from films.models import Film, Director 


class AddFilmForm(forms.ModelForm):
    class Meta:
        model = Film
        fields = '__all__'
        

class AddDirectorForm(forms.ModelForm):
    class Meta:
        model = Director
        fields = '__all__'
        
        