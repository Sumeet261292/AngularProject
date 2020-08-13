import { NgModule,Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { CartComponent } from './cart/cart.component';
import { SigninComponent } from './signin/signin.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},  
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'showcase', component: ShowcaseComponent},
  {path: 'cart', component: CartComponent},
  // {path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
  // {path: 'todos', component: ListTodosComponent, canActivate:[RouteGuardService]},
  // {path: 'todos/:id', component: TodoComponent, canActivate:[RouteGuardService]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
