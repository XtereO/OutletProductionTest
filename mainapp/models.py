from django.db import models

#Create models here

#--------------------SUPPORT_MODELS----------------

class Brand(models.Model):

    title=models.CharField(max_length=50,unique=True,verbose_name="Название брэнда")
    description=models.TextField(verbose_name="Короткое описание")
    image=models.ImageField(upload_to="brands/",blank=True,null=True,verbose_name="Картинка брэнда")
    is_doLens=models.BooleanField(default=False,verbose_name="Есть ли у вас линзы этого брэнда?")
    is_doRims=models.BooleanField(default=True,verbose_name="Есть ли у вас оправы этого брэнда?")
    is_doSunGlasses=models.BooleanField(default=False,verbose_name="Есть ли у вас солнцезащитные очки этого брэнда?")

    def __str__(self):
        return f"{self.title} - {self.description}"

class Material(models.Model):

    title=models.CharField(max_length=50,unique=True,verbose_name="Название материала")

    def __str__(self):
        return f"{self.title}"

class Color(models.Model):

    title=models.CharField(max_length=50,unique=True,verbose_name="Название цвета")

    def __str__(self):
        return self.title

class Shape(models.Model):

    title=models.CharField(max_length=50,unique=True,verbose_name="Название формы")

    def __str__(self):
        return self.title
    
class Gender(models.Model):

    title=models.CharField(max_length=50,unique=True,verbose_name="Название категории очков")

    def __str__(self):
        return self.title

#Only for accessory!!!
class CategoryAccessory(models.Model):

    title=models.CharField(max_length=50,unique=True,verbose_name="Название категории аксессуара")

    def __str__(self):
        return self.title


#-------------MAIN_MODELS---------------------

class GlassesRim(models.Model):

    #Brand who was created and Articul-name glasses
    title=models.CharField(max_length=100,unique=True,verbose_name="Название")
    brand=models.ForeignKey(Brand,on_delete=models.CASCADE,verbose_name="Брэнд")
    article=models.CharField(max_length=50,unique=True,verbose_name="Артикул")

    #Outside params
    color=models.ForeignKey(Color,on_delete=models.CASCADE,verbose_name="Цвет")
    material=models.ForeignKey(Material,on_delete=models.CASCADE,verbose_name="Материал")
    shape=models.ForeignKey(Shape,on_delete=models.CASCADE,verbose_name="Форма")
    image=models.ImageField(upload_to="glasses/",blank=True,null=True,verbose_name="Картинка")
    gender=models.ForeignKey(Gender,on_delete=models.CASCADE,verbose_name="Категория")

    #Market params
    price=models.PositiveIntegerField(verbose_name="Цена")
    is_available=models.BooleanField(default=True,verbose_name="Есть ли в наличии?")
    is_sunGlasses=models.BooleanField(default=False,verbose_name="Это солнцезащитные очки?")

    def __str__(self):
        return f"{self.brand} - glasses rim - {self.price}"

class Accessory(models.Model):

    #Outside params
    title=models.CharField(max_length=50,unique=True,verbose_name="Название")
    category=models.ForeignKey(CategoryAccessory,on_delete=models.CASCADE,verbose_name="Категория")
    image=models.ImageField(upload_to="accessory/",blank=True,null=True,verbose_name="Картинка")

    #Market params
    price=models.PositiveIntegerField(verbose_name="Цена")
    is_available=models.BooleanField(default=True,verbose_name="Есть ли в наличии?")

    def __str__(self):
        return self.title

class MarketPoint(models.Model):

    region=models.CharField(max_length=50,verbose_name="Район")
    street=models.CharField(max_length=50,verbose_name="Улица")
    link=models.TextField(verbose_name="Ссылка на точку в 2GIS")

    def __str__(self):
        return f"{self.region} , {self.street}"
    


    

   