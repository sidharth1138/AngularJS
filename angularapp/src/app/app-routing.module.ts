import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'order', component: OrderComponent, canActivate: [AuthGuard] },
  // { path: "", redirectTo: "home", pathMatch: 'full' },
  // { path: "home/:name", component: HomeComponent },
  // { path: "blog", component: BlogComponent },
  // { path: "about", component: AboutComponent },
  // { path: "**", component: NotfoundComponent }
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

