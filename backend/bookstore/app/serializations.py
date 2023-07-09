from rest_framework import serializers
from .models import Book, Image

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('id', 'title', 'author', 'publication_date', 'price')

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('id', 'image', 'created_at')