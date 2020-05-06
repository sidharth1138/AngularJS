import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: ('contact') },
  { path: 'contact', component: ContactComponent },
  { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
