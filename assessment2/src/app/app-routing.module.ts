import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformationComponent } from './information/information.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  { path: 'information', component: InformationComponent },
  { path: 'detail', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
