
from django.urls import path
from .views import login_view, logout_view, profile_details, payment_list, payment_create, profile_edit, register_view
from django.contrib.auth import views as auth_views
from .views import custom_password_change, custom_password_change_done
app_name = 'accounts'
urlpatterns = [
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
    path('profile/', profile_details, name='profile_details'),
    path('payments/', payment_list, name='payment_list'),
    path('payments/new/', payment_create, name='payment_create'),
    path('profile/edit/', profile_edit, name='profile_edit'),
    path('register/', register_view, name='register'),
    path('profile/password-change/', custom_password_change, name='password_change'),
    path('profile/password-change/done/', custom_password_change_done, name='password_change_done'),

]