#MainImport 
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from rest_framework.filters import SearchFilter

#ObjectsImport
from ..models import (
    Shape,Color,
    Material,Brand,
    GlassesRim,Gender,
    Accessory,CategoryAccessory,
    MarketPoint
)

#SerializersImport
from .serializers import (
    ShapeSerializer,ColorSerializer,
    MaterialSerializer,BrandSerializer,
    GlassesRimSerializer,
    GenderSerializer,CategoryAccessorySerializer,
    AccessorySerializer,MarketPointSerializer
)


#----------SUPPORT_VIEWS--------------

class PaginationGlassesRims(PageNumberPagination):

    page_size=9
    page_size_query_param='page_size'
    max_page_size=9

class ColorView(ListAPIView):

    queryset=Color.objects.all()
    serializer_class=ColorSerializer

class ShapeView(ListAPIView):

    queryset=Shape.objects.all()
    serializer_class=ShapeSerializer

class BrandView(ListAPIView):

    queryset=Brand.objects.all()
    serializer_class=BrandSerializer

    def get_queryset(self):
        qs=super().get_queryset()
        
        is_doLensQs=self.request.query_params.get("is_doLens")
        if is_doLensQs:
            if is_doLensQs=="True" or is_doLensQs=="true" or is_doLensQs==True:
                qs=qs.filter(is_doLens=True)

        is_doRimsQs=self.request.query_params.get("is_doRims")        
        if is_doRimsQs:
            if is_doRimsQs=="True" or is_doRimsQs=="true" or is_doRimsQs==True:
                qs=qs.filter(is_doRims=True)
        
        is_doSunGlassesQs=self.request.query_params.get("is_doSunGlasses")
        if is_doSunGlassesQs:
            if is_doSunGlassesQs=="True" or is_doSunGlassesQs=="true" or is_doSunGlassesQs==True:
                qs=qs.filter(is_doSunGlasses=True)

        return qs
        
        

class MaterialView(ListAPIView):

    queryset=Material.objects.all()
    serializer_class=MaterialSerializer

class GenderView(ListAPIView):

    queryset=Gender.objects.all()
    serializer_class=GenderSerializer

class CategoryAccessoryView(ListAPIView):

    queryset=CategoryAccessory.objects.all()
    serializer_class=CategoryAccessorySerializer


#-----------------MAIN_VIEWS--------------

class GlassesRimView(ListAPIView):

    queryset=GlassesRim.objects.all()
    pagination_class=PaginationGlassesRims
    serializer_class=GlassesRimSerializer
    
    def get_queryset(self):
        qs=super().get_queryset()
        
        brand=self.request.query_params.get('brand')
        if brand and brand!="0":qs=qs.filter(brand__id__iexact=brand)

        is_SunGlasses=self.request.query_params.get('is_sunglasses')
        if is_SunGlasses:
            if is_SunGlasses=="true" or is_SunGlasses=="True" or is_SunGlasses==True:
                qs=qs.filter(is_sunGlasses=True)
            else:qs=qs.filter(is_sunGlasses=False)
        
        is_availableqs=self.request.query_params.get('is_available')
        if is_availableqs:
            if is_availableqs=="true" or is_SunGlasses=="True" or is_SunGlasses==True:
                qs=qs.filter(is_available=True)

        color=self.request.query_params.get('color')
        if color and color!="0":qs=qs.filter(color__id__iexact=color)

        shape=self.request.query_params.get('shape')
        if shape and shape!="0":qs=qs.filter(shape__id__iexact=shape) 

        material=self.request.query_params.get('material')
        if material and material!="0":qs=qs.filter(material__id__iexact=material)

        gender=self.request.query_params.get('gender')
        if gender and gender!="0":qs=qs.filter(gender__id__iexact=gender)

        ID=self.request.query_params.get('id')
        if ID:qs=qs.filter(id__iexact=ID)

        #UP - True , DOWN - False
        sort_by_price=self.request.query_params.get('sort_price')
        if sort_by_price and sort_by_price!="null":
            if sort_by_price==True or sort_by_price=="True" or sort_by_price=="true":qs=qs.order_by("price")
            else:qs=qs.order_by("-price")
        else:qs=qs.order_by("-id")
        
        return qs

class AccessoryView(ListAPIView):

    queryset=Accessory.objects.all()
    serializer_class=AccessorySerializer
    pagination_class=PaginationGlassesRims

    def get_queryset(self):
        qs=super().get_queryset()
        
        category=self.request.query_params.get('category')
        if category and category!="0":qs=qs.filter(category__id__iexact=category)
        
        ID=self.request.query_params.get('id')
        if ID:qs=qs.filter(id__iexact=ID)
        
        is_available=self.request.query_params.get('is_available')
        if is_available:
            if is_available=="true" or is_available=="True" or is_available==True:
                qs=qs.filter(is_available=True)

        #Cheap first - True , Expensive first - False
        sort_by_price=self.request.query_params.get('sort_price')
        if sort_by_price and sort_by_price!="null":
            if sort_by_price=="True" or sort_by_price=="true" or sort_by_price==True:qs=qs.order_by("price")
            else:qs=qs.order_by("-price")
        else:qs=qs.order_by("-id")
        
        return qs

class MarketPointView(ListAPIView):

    queryset=MarketPoint.objects.all()
    serializer_class=MarketPointSerializer