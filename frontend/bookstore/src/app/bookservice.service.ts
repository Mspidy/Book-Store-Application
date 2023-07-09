import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor(private http: HttpClient) { }

  public postNewBook(data:any){
    return this.http.post('http://localhost:8000/api/books/',data)
  }

  public getAllBook(){
    return this.http.get('http://localhost:8000/api/books/')
  }

  public uploadImage(image:any){
    return this.http.post('http://localhost:8000/upload/',image)
  }

  public getAllBookImage(){
    return this.http.get('http://localhost:8000/get/')
  }
}
