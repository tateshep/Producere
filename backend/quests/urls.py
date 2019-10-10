from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListQuest.as_view()),
    path('<int:pk>/', views.DetailQuest.as_view()),
    path('journeys/', views.ListJourney.as_view()),
    path('journeys/<int:pk>/', views.DetailJourney.as_view()),
    
]

