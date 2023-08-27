from django.urls import path, include
from .views import *

urlpatterns  = [
    path('table', BookTableView.as_view()),
    path('user', UserView.as_view()),
    path('login', LoginView.as_view()),
    path('menu', MenuView.as_view()),
    path('menuimg', MenuImgView.as_view()),
    path('menuimg/<str:menu_id>/', MenuImgDetailView.as_view(), name='menuimg-detail'),
    path('cart', CartView.as_view()),
    path('cart/detail', CartDetailView.as_view()),
    path('cart/quantity', CartQuantityView.as_view()),
]