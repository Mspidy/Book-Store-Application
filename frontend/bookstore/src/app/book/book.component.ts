import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private readonly bookservice: BookserviceService) { }

  p: number = 1
  AllBooks:any = []
  bookImage:any = []

  ngOnInit(): void {
    this.getAllBook()
    this.getAllBookImage()
  }

  getAllBook(){
    this.bookservice.getAllBook().subscribe((res:any)=>{
      console.log(res)
      this.AllBooks = res
    })
  }

  getAllBookImage(){
    this.bookservice.getAllBookImage().subscribe((res:any)=>{
      console.log(res)
      this.bookImage = res
    })
  }

}
