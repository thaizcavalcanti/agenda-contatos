import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { ForgotPasswordComponent } from './components/account/forgot-password/forgot-password.component';


//mapemento das rotas do módulo
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'account/login' },
  { path: 'account/login', component: LoginComponent },
  { path: 'account/register', component: RegisterComponent },
  { path: 'account/forgot-password', component: ForgotPasswordComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}




