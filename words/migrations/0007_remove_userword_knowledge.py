# Generated by Django 3.0.4 on 2020-04-30 10:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('words', '0006_auto_20200430_1315'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userword',
            name='knowledge',
        ),
    ]
