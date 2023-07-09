import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { BookComponent } from '../book/book.component';
import { NewBookComponent } from '../new-book/new-book.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'book', component: BookComponent},
  { path: 'add-book', component: NewBookComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy',
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
