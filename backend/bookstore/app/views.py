
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from app.serializations import BookSerializer, ImageSerializer

from .models import Book, Image
from rest_framework import generics

from django.conf import settings
from django.views.static import serve

class BookListCreateView(APIView):
    def get(self, request):
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class BookDetailView(APIView):
    def get(self, request, book_id):
        try:
            book = Book.objects.get(id=book_id)
        except Book.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer = BookSerializer(book)
        return Response(serializer.data)

    def put(self, request, book_id):
        try:
            book = Book.objects.get(id=book_id)
        except Book.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer = BookSerializer(book, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, book_id):
        try:
            book = Book.objects.get(id=book_id)
        except Book.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        book.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ImageUploadAPIView(generics.CreateAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

class ImageViewSet(generics.ListAPIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer


def image_get_direct(request, image_path):
    return serve(request, image_path, document_root=settings.MEDIA_ROOT)
