# accounts/views.py
from django.contrib.auth import logout, authenticate, login
from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

from accounts.forms import PaymentForm, ProfileForm, MyUserForm, CustomUserCreationForm
from accounts.models import Payment, Profile

# accounts/views.py
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import update_session_auth_hash
from django.urls import reverse
from .forms import CustomPasswordChangeForm


@login_required
def custom_password_change(request):
    if request.method == 'POST':
        form = CustomPasswordChangeForm(request.user, request.POST)
        if form.is_valid():
            user = form.save()
            update_session_auth_hash(request, user)  # برای جلوگیری از خارج شدن از سیستم
            return redirect('accounts:password_change_done')
    else:
        form = CustomPasswordChangeForm(request.user)

    return render(request, 'accounts/password_change.html', {'form': form})


@login_required
def custom_password_change_done(request):
    return render(request, 'accounts/password_change_done.html')


def login_view(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect(reverse('ticketing:showtime_list'))
    
    next_url = request.GET.get('next')
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            redirect_url = next_url if next_url else reverse('ticketing:showtime_list')
            return HttpResponseRedirect(redirect_url)
        else:
            context = {
                'username': username,
                'error': 'کاربری با این مشخصات یافت نشد'
            }
    else:
        context = {}
    return render(request, 'accounts/login.html', context)


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse('accounts:login'))


def register_view(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect(reverse('ticketing:showtime_list'))
    
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            # این خط را اضافه کنید: ایجاد یک پروفایل برای کاربر جدید
            Profile.objects.create(user=user)
            
            login(request, user)
            return HttpResponseRedirect(reverse('ticketing:showtime_list'))
    else:
        form = CustomUserCreationForm()
    
    context = {
        'form': form
    }
    return render(request, 'accounts/register.html', context)


@login_required
def profile_details(request):
    profile = request.user.profile
    context = {
        'profile': profile
    }
    return render(request, 'accounts/profile_details.html', context)


def register_sajad(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect(reverse('ticketing:showtime_list'))

    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            # این خط را اضافه کنید: ایجاد یک پروفایل برای کاربر جدید
            Profile.objects.create(user=user)

            login(request, user)
            return HttpResponseRedirect(reverse('ticketing:showtime_list'))
    else:
        form = CustomUserCreationForm()

    context = {
        'form': form
    }
    return render(request, 'accounts/register.html', context)


@login_required
def payment_list(request):
    payments = Payment.objects.filter(profile=request.user.profile).order_by('-transaction_time')
    context = {
        'payments': payments
    }
    return render(request, 'accounts/payment_list.html', context)


@login_required
def payment_create(request):
    if request.method == 'POST':
        payment_form = PaymentForm(request.POST)
        if payment_form.is_valid():
            payment = payment_form.save(commit=False)
            payment.profile = request.user.profile
            payment.save()
            request.user.profile.deposit(payment.amount)
            return HttpResponseRedirect(reverse('accounts:payment_list'))
    else:
        payment_form = PaymentForm()
    context = {
        'payment_form': payment_form
    }
    return render(request, 'accounts/payment_create.html', context)


@login_required
def profile_edit(request):
    if request.method == 'POST':
        user_form = MyUserForm(request.POST, instance=request.user)
        profile_form = ProfileForm(request.POST, files=request.FILES, instance=request.user.profile)
        if user_form.is_valid() and profile_form.is_valid():
            user_form.save()
            profile_form.save()
            return HttpResponseRedirect(reverse('accounts:profile_details'))
    else:
        user_form = MyUserForm(instance=request.user)
        profile_form = ProfileForm(instance=request.user.profile)
    context = {
        'user_form': user_form,
        'profile_form': profile_form
    }
    return render(request, 'accounts/profile_edit.html', context)

def password_change_done_view(request):
    return render(request, 'accounts/password_change_done.html')