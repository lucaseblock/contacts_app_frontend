import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ContactsComponent } from './pages/secure/contacts/contacts.component';
import { RegisterComponent } from './pages/register/register.component';
import { MaterialModule } from './common/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './common/services/http/interceptos/auth.interceptor';
import { HeaderComponent } from './common/components/header/header.component';
import { ContactComponent } from './pages/secure/contacts/contact/contact.component';
import { QuestionDialogComponent } from './common/components/question-dialog/question-dialog.component';
import { AddEditContactComponent } from './pages/secure/contacts/add-edit-contact/add-edit-contact.component';
import { ErrorInterceptor } from './common/services/http/interceptos/error.interceptor';
import { ErrorSnackbarComponent } from './common/components/error-snackbar/error-snackbar.component';
import { SuccessSnackbarComponent } from './common/components/success-snackbar/success-snackbar.component';
import { LoadingIconComponent } from './common/components/loading-icon/loading-icon.component';

@NgModule({
  declarations: [
		AppComponent,
		LoginComponent,
		ContactsComponent,
		RegisterComponent,
		HeaderComponent,
		ContactComponent,
		QuestionDialogComponent,
		AddEditContactComponent,
  ErrorSnackbarComponent,
  SuccessSnackbarComponent,
  LoadingIconComponent,
  	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MaterialModule,
		ReactiveFormsModule,
		FormsModule,
  	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorInterceptor,
			multi: true,
		},
	],
	bootstrap: [ AppComponent ],
})
export class AppModule { }