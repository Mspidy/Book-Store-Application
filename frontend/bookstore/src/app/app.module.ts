import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { NewBookComponent } from './new-book/new-book.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    NewBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
