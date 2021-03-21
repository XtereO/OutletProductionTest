from django.urls import path
from .views import (
    ColorView,MaterialView,
    ShapeView,BrandView,
    GlassesRimView,GenderView,
    AccessoryView,CategoryAccessoryView,
    MarketPointView
)

urlpatterns = [
    path('colors/',ColorView.as_view()),
    path('materials/',MaterialView.as_view()),
    path('shapes/',ShapeView.as_view()),
    path('brands/',BrandView.as_view()),
    path('genders/',GenderView.as_view()),
    path('glassesrims/',GlassesRimView.as_view()),
    path('accessory/',AccessoryView.as_view()),
    path('categoryaccessory/',CategoryAccessoryView.as_view()),
    path('marketpoints/',MarketPointView.as_view())
]