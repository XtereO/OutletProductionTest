from django.contrib import admin

from .models import (
    Color,Shape,
    Brand,GlassesRim,
    Material,Gender,
    Accessory,CategoryAccessory,
    MarketPoint
)
# Register your models here.
modelsToRegister=[
    Color,Shape,Brand,
    Material,GlassesRim,
    Gender,CategoryAccessory,
    Accessory,MarketPoint
]
for a in modelsToRegister:admin.site.register(a)