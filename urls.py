"""mashuv URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from firstApp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.base,name='base'),
    path('login/',views.login,name='login'),
    path('logout/',views.logout),
    path('see_me/',views.see_me),
    path('see_more/',views.see_more),
    path('addES/',views.addES),
    path('addP/',views.addP),
    path('addS/',views.addS),
    path('display/',views.display,name='display'),
    path('displayES/',views.displayES),
    path('displayP/',views.displayP),
    path('displayS/',views.displayS),
    path('statistica/',views.statistica),
    path('remove/',views.remove),
    path('removeMesseges/',views.removeMesseges),
    path('messeges',views.messeges),
    path('see_messeges',views.see_messeges),
]
