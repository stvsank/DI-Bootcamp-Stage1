# Generated by Django 4.1.2 on 2022-10-15 00:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('info', '0002_rename_persons_person'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Person',
            new_name='Persons',
        ),
    ]