import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css'],
})
export class NewBookComponent implements OnInit {
  newBlog: boolean = false;
  mainBlog: boolean = true;
  documentObj: any = '';
  AllBooks: any = [];
  selectedFile!: File;

  newBooks!: any;

  constructor(private readonly bookservice: BookserviceService) {}

  ngOnInit() {
    this.newBooks = new FormGroup({
      bookTitle: new FormControl('', Validators.required),
      bookAuthor: new FormControl('', Validators.required),
      publishDate: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]),
      bookPrice: new FormControl('', Validators.required),
    });
    this.getAllBook()
  }

  createBlog() {
    this.newBlog = true;
    this.mainBlog = false;
  }

  mainPage() {
    this.newBlog = false;
    this.mainBlog = true;
  }

  saveblogs() {
    console.log(this.newBooks.value);
    let obj = {
      title: this.newBooks.value.bookTitle,
      author: this.newBooks.value.bookAuthor,
      publication_date: this.newBooks.value.publishDate,
      price: parseInt(this.newBooks.value.bookPrice),
    };
    console.log(obj)
    this.bookservice.postNewBook(obj).subscribe((res: any) => {
      console.log(res);
    });
  }
  selectedImage:any
  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    event.preventDefault();

    if (!this.selectedFile) {
      console.log('No file selected');
      return;
    }

    let formData:any = new FormData();
    formData.append("image", this.selectedFile, this.selectedFile.name);
    this.selectedImage = formData

    console.log(formData)
    this.bookservice.uploadImage(formData).subscribe((res:any)=>{
      console.log(res)
    })
  }

  getAllBook(){
    this.bookservice.getAllBook().subscribe((res:any)=>{
      console.log(res)
      this.AllBooks = res
    })
  }

  deleteBook(event:any){
    console.log(event)
  }
}
