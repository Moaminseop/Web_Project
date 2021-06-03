from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from accounts.form import UserForm

# Create your views here.

def register(request):
  
    if request.method == "POST":
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('landing')
    else:
        form = UserForm()
    return render(request, 'accounts/register.html', {'form': form})
