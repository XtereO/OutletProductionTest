# Generated by Django 3.1.7 on 2021-03-17 15:53

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0010_auto_20210317_1839'),
    ]

    operations = [
        migrations.AddField(
            model_name='marketpoint',
            name='link',
            field=models.TextField(default=django.utils.timezone.now, verbose_name='Ссылка на точку в 2GIS'),
            preserve_default=False,
        ),
    ]
