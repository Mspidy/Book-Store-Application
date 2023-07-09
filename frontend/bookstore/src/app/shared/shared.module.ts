import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { NavigationComponent } from '../navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ 
    NavigationComponent 
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class SharedModule { }
