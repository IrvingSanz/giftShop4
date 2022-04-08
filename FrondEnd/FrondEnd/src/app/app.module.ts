import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './Components/users/users.component';
import { ListUsersComponent } from './Components/users/list-users/list-users.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { UserComponent } from './Components/users/user/user.component';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { AddProductsComponent } from './views/add-products/add-products.component';
import { AboutComponent } from './views/about/about.component';
import { ProductsComponent } from './views/products/products.component';
import { ProfileComponent } from './views/profile/profile.component';
import { TestComponent } from './views/test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ListUsersComponent,
    FooterComponent,
    HeaderComponent,
    UserComponent,
    LoginComponent,
    AddProductsComponent,
    AboutComponent,
    ProductsComponent,
    ProfileComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
