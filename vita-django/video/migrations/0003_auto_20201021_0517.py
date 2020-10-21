# Generated by Django 3.1.1 on 2020-10-21 05:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('video', '0002_auto_20201020_1658'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='comment',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='video',
            name='thumbnail',
            field=models.ImageField(upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='video',
            name='uploaded_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='video',
            name='videoFile',
            field=models.FileField(upload_to='videos/'),
        ),
    ]