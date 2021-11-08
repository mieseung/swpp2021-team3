# Generated by Django 3.2.8 on 2021-11-04 15:35

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('user', '0005_merge_0002_auto_20211103_1226_0004_auto_20211103_1543'),
        ('report', '0002_auto_20211104_1400'),
    ]

    operations = [
        migrations.AlterField(
            model_name='report',
            name='reported_summoner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reported', to='user.summoner'),
        ),
        migrations.AlterField(
            model_name='report',
            name='reporting_user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='reporting', to=settings.AUTH_USER_MODEL),
        ),
    ]