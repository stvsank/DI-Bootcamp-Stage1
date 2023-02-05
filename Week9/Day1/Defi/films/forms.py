from django import forms
from films.models import Film, Director 


class AddFilmForm(forms.ModelForm):
    class Meta:
        model = Film
        fields = '__all__'
        widgets = {
            'title': forms.Textarea(attrs={'class': 'textarea'}),
            'created_in_country': forms.Select(attrs={'class': 'select'}),
            'category': forms.Select(attrs={'class': 'select'})
        }
        

class AddDirectorForm(forms.ModelForm):
    class Meta:
        model = Director
        fields = '__all__'
        
        