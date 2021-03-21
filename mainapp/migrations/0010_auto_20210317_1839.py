# Generated by Django 3.1.7 on 2021-03-17 15:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0009_auto_20210317_0839'),
    ]

    operations = [
        migrations.CreateModel(
            name='MarketPoint',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('region', models.CharField(max_length=50, verbose_name='Район')),
                ('street', models.CharField(max_length=50, verbose_name='Улица')),
            ],
        ),
        migrations.AlterField(
            model_name='accessory',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainapp.categoryaccessory', verbose_name='Категория'),
        ),
        migrations.AlterField(
            model_name='accessory',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='accessory/', verbose_name='Картинка'),
        ),
        migrations.AlterField(
            model_name='accessory',
            name='is_available',
            field=models.BooleanField(default=True, verbose_name='Есть ли в наличии?'),
        ),
        migrations.AlterField(
            model_name='accessory',
            name='price',
            field=models.PositiveIntegerField(verbose_name='Цена'),
        ),
        migrations.AlterField(
            model_name='accessory',
            name='title',
            field=models.CharField(max_length=50, unique=True, verbose_name='Название'),
        ),
        migrations.AlterField(
            model_name='brand',
            name='description',
            field=models.TextField(verbose_name='Короткое описание'),
        ),
        migrations.AlterField(
            model_name='brand',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='brands/', verbose_name='Картинка брэнда'),
        ),
        migrations.AlterField(
            model_name='brand',
            name='is_doLens',
            field=models.BooleanField(default=False, verbose_name='Есть ли у вас линзы этого брэнда?'),
        ),
        migrations.AlterField(
            model_name='brand',
            name='is_doRims',
            field=models.BooleanField(default=True, verbose_name='Есть ли у вас оправы этого брэнда?'),
        ),
        migrations.AlterField(
            model_name='brand',
            name='is_doSunGlasses',
            field=models.BooleanField(default=False, verbose_name='Есть ли у вас солнцезащитные очки этого брэнда?'),
        ),
        migrations.AlterField(
            model_name='brand',
            name='title',
            field=models.CharField(max_length=50, unique=True, verbose_name='Название брэнда'),
        ),
        migrations.AlterField(
            model_name='categoryaccessory',
            name='title',
            field=models.CharField(max_length=50, unique=True, verbose_name='Название категории аксессуара'),
        ),
        migrations.AlterField(
            model_name='color',
            name='title',
            field=models.CharField(max_length=50, unique=True, verbose_name='Название цвета'),
        ),
        migrations.AlterField(
            model_name='gender',
            name='title',
            field=models.CharField(max_length=50, unique=True, verbose_name='Название категории очков'),
        ),
        migrations.AlterField(
            model_name='glassesrim',
            name='article',
            field=models.CharField(max_length=50, unique=True, verbose_name='Артикул'),
        ),
        migrations.AlterField(
            model_name='glassesrim',
            name='brand',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainapp.brand', verbose_name='Брэнд'),
        ),
        migrations.AlterField(
            model_name='glassesrim',
            name='color',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainapp.color', verbose_name='Цвет'),
        ),
        migrations.AlterField(
            model_name='glassesrim',
            name='gender',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainapp.gender', verbose_name='Категория'),
        ),
        migrations.AlterField(
            model_name='glassesrim',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='glasses/', verbose_name='Картинка'),
        ),
        migrations.AlterField(
            model_name='glassesrim',
            name='is_available',
            field=models.BooleanField(default=True, verbose_name='Есть ли в наличии?'),
        ),
        migrations.AlterField(
            model_name='glassesrim',
            name='is_sunGlasses',
            field=models.BooleanField(default=False, verbose_name='Это солнцезащитные очки?'),
        ),
        migrations.AlterField(
            model_name='glassesrim',
            name='material',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainapp.material', verbose_name='Материал'),
        ),
        migrations.AlterField(
            model_name='glassesrim',
            name='price',
            field=models.PositiveIntegerField(verbose_name='Цена'),
        ),
        migrations.AlterField(
            model_name='glassesrim',
            name='shape',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainapp.shape', verbose_name='Форма'),
        ),
        migrations.AlterField(
            model_name='glassesrim',
            name='title',
            field=models.CharField(max_length=100, unique=True, verbose_name='Название'),
        ),
        migrations.AlterField(
            model_name='material',
            name='title',
            field=models.CharField(max_length=50, unique=True, verbose_name='Название материала'),
        ),
        migrations.AlterField(
            model_name='shape',
            name='title',
            field=models.CharField(max_length=50, unique=True, verbose_name='Название формы'),
        ),
    ]