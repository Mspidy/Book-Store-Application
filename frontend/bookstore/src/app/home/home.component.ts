import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private readonly bookservice: BookserviceService) { }
  bookImage:any = []

  ngOnInit(): void {
    this.getAllBookImage()
  }

  getAllBookImage(){
    this.bookservice.getAllBookImage().subscribe((res:any)=>{
      console.log(res)
      this.bookImage = res
    })
  }

}
