import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloorPipe } from './floor.pipe';
import { ReversePipe } from './reverse.pipe';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DepartmentModule } from './department/department.module';
import { ProductModule } from './product/product.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { VerbComponent } from './verb/verb.component';
import { PostsComponent } from './posts/posts.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule} from '@angular/cdk/drag-drop'
import { Employee1Component } from './employee1/employee1.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    FloorPipe,
    ReversePipe,
    OrderComponent,
    HomeComponent,
    BlogComponent,
    AboutComponent,
    NotfoundComponent,
    LoginComponent,
    SignUpComponent,
    VerbComponent,
    PostsComponent,
    Employee1Component,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    DepartmentModule,
    ProductModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
