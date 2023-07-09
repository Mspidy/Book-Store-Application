from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    publication_date = models.DateField()
    price = models.DecimalField(max_digits=6, decimal_places=2)

class Image(models.Model):
    image = models.ImageField(upload_to='book_images/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.image.name
