from rest_framework import serializers
from ..models import (
    Color,Material,
    Brand,Shape,
    GlassesRim,Gender,
    CategoryAccessory,Accessory,
    MarketPoint
) 



#--------------SUPPORT_SERIALIZERS-----------------

class ColorSerializer(serializers.ModelSerializer):

    class Meta:
        model=Color
        fields="__all__"

class MaterialSerializer(serializers.ModelSerializer):

    class Meta:
        model=Material
        fields="__all__"

class ShapeSerializer(serializers.ModelSerializer):

    class Meta:
        model=Shape
        fields="__all__"

class BrandSerializer(serializers.ModelSerializer):

    class Meta:
        model=Brand
        fields=("__all__")

class GenderSerializer(serializers.ModelSerializer):

    class Meta:
        model=Gender
        fields="__all__"

class CategoryAccessorySerializer(serializers.ModelSerializer):

    class Meta:
        model=CategoryAccessory
        fields="__all__"


#--------------MAIN_SERIALIZERS---------------------

class GlassesRimSerializer(serializers.ModelSerializer):

    color=ColorSerializer()
    material=MaterialSerializer()
    shape=ShapeSerializer()
    brand=BrandSerializer()
    gender=GenderSerializer()

    class Meta:
        model=GlassesRim
        fields="__all__"

class AccessorySerializer(serializers.ModelSerializer):

    category=CategoryAccessorySerializer()

    class Meta:
        model=Accessory
        fields="__all__"

class MarketPointSerializer(serializers.ModelSerializer):

    class Meta:
        model=MarketPoint
        fields="__all__"