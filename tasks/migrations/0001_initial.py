# Generated by Django 4.2.7 on 2023-11-24 11:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Task",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=200)),
                ("description", models.TextField(blank=True, null=True)),
                ("done", models.BooleanField(default=False)),
            ],
        ),
    ]
