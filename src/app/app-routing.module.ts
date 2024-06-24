import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ContactsComponent } from './pages/secure/contacts/contacts.component';
import { AuthGuard } from './common/services/security/auth.guard';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'contacts', component: ContactsComponent, canActivate: [AuthGuard] },
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: '**', redirectTo: '/login' },
];

@NgModule({
  	imports: [RouterModule.forRoot(routes, { useHash: true })],
  	exports: [RouterModule]
})
export class AppRoutingModule { }