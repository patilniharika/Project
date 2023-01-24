from django.urls import path, include
from .views import *

urlpatterns  = [
    path('table', BookTableView.as_view()),
    path('user', UserView.as_view()),
]