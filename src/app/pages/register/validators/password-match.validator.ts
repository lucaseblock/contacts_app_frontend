import { AbstractControl, ValidationErrors } from '@angular/forms';

export function PasswordMatchValidator(control: AbstractControl): ValidationErrors | null {
	const password = control.get('password');
	const confirmPassword = control.get('confirmPassword');
	if (password?.value !== confirmPassword?.value) {
		return { 'passwordsNotMatch': true };
	}
	return null;
}