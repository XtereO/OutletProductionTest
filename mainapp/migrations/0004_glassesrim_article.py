# Generated by Django 3.1.7 on 2021-03-13 19:32

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0003_remove_accessory_is_sunglasses'),
    ]

    operations = [
        migrations.AddField(
            model_name='glassesrim',
            name='article',
            field=models.SlugField(default=django.utils.timezone.now, unique=True),
            preserve_default=False,
        ),
    ]
