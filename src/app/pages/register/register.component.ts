import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordMatchValidator } from './validators/password-match.validator';
import { SessionService } from 'src/app/common/services/session.service';
import { Router } from '@angular/router';
import { UiService } from 'src/app/common/services/ui.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  	public registerForm: FormGroup;
	public loadingRegister: boolean = false;
	public hidePassword: boolean = true;
	public hideConfirmPassword: boolean = true;

	constructor(private sessionService: SessionService, private router: Router, private formBuilder: FormBuilder, private uiService: UiService) {
		this.registerForm = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required],
			confirmPassword: ['', Validators.required]
		}, { validator: PasswordMatchValidator });
	}

	public async register(): Promise<void> {
		if (this.registerForm.invalid) {
			return;
		}
		this.loadingRegister = true;
		try {
			const response = await this.sessionService.register(this.registerForm.value.username, this.registerForm.value.password);
			if (response.id) {
				this.uiService.openSuccessSnackBar('Registration successful');
				this.router.navigate(['/login'])
			}
		} finally {
			this.loadingRegister = false;
		}
  	}

	get passwordsMatch(): boolean {
		return !this.registerForm.hasError('passwordsNotMatch') && this.registerForm.get('password')?.value;
	}

}