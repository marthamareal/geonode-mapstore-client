# Generated by Django 2.2.20 on 2021-05-12 13:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mapstore2_adapter', '0004_auto_20210219_1015'),
        ('maps', '0034_merge_20210512_1104'),
    ]

    operations = [
        migrations.DeleteModel(
            name='MapStoreAttribute',
        ),
        migrations.DeleteModel(
            name='MapStoreData',
        ),
        migrations.DeleteModel(
            name='MapStoreResource',
        ),
    ]
