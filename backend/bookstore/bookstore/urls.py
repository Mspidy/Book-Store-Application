from django.urls import path

from app.views import BookDetailView, BookListCreateView, ImageUploadAPIView, ImageViewSet, image_get_direct

urlpatterns = [
    # other URL patterns...
    path('api/books/', BookListCreateView.as_view(), name='book-list-create'),
    path('api/books/<int:book_id>/', BookDetailView.as_view(), name='book-detail'),
    path('upload/', ImageUploadAPIView.as_view(), name='image-upload'),
    path('get/', ImageViewSet.as_view(), name='image-get'),
    path('media/<path:image_path>/', image_get_direct, name='image-get-direct'),
]
