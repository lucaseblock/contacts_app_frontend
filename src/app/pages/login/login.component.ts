import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/common/services/session.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 	public loginForm: FormGroup;
	public loadingLogin: boolean = false;
	public hidePassword: boolean = true;

	constructor(private sessionService: SessionService, private router: Router, private formBuilder: FormBuilder) {
		this.loginForm = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

  	public async login(): Promise<void> {
		if (this.loginForm.invalid) {
			return;
		}
		this.loadingLogin = true;
		try {		
			const response = await this.sessionService.login(this.loginForm.value.username, this.loginForm.value.password);
			if (response.token) {
				this.router.navigate(['/contacts'])
			}
		} finally {
			this.loadingLogin = false;
		}
  	}

	logout(): void {
		this.sessionService.logout();
	}

}
