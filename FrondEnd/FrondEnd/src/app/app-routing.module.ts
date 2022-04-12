import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { ListUsersComponent } from './Components/users/list-users/list-users.component';
import { UserComponent } from './Components/users/user/user.component';
import { AboutComponent } from './views/about/about.component';
import { ProductsComponent } from './views/products/products.component';
import { ProfileComponent } from './views/profile/profile.component';
import { TestComponent } from './views/test/test.component';

const routes: Routes = [
  // {path:'', component:ProductsComponent },
  {path:'', component:ProductsComponent},
  {path:'products', component:ProductsComponent},
  {path:'register', component:UserComponent},
  {path:'profile', component:ProfileComponent},
  {path:'about', component:AboutComponent},
  {path:'listOfUsers', component:ListUsersComponent}, 
  {path:'login', component:LoginComponent },  
  {path:'test', component:TestComponent },

  {path: '**', pathMatch:'full', redirectTo: '#'}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
