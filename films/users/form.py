from django import forms

class UploadImageProfileForm(forms.Form):
    class Meta:
        id_user = forms.CharField()