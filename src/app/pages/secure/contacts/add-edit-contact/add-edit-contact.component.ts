import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContactForm } from 'src/app/types/contacts';

@Component({
	selector: 'app-add-edit-contact',
	templateUrl: './add-edit-contact.component.html',
	styleUrls: ['./add-edit-contact.component.scss']
})
export class AddEditContactComponent {
	public contactForm: FormGroup;
	public title: string = '';

	constructor(
		private formBuilder: FormBuilder,
		public dialogRef: MatDialogRef<AddEditContactComponent>,
		@Inject(MAT_DIALOG_DATA) public data: ContactForm & { title: string } ) {
		this.title = data.title;
		this.contactForm = this.formBuilder.group({
			name: [data.name, Validators.required],
			last_name: [data.last_name],
			phone: [data.phone, [Validators.required, Validators.minLength(10)]]
		});
	}

	public onSave(): void {
		if (this.contactForm.valid) {
		  	this.dialogRef.close(this.contactForm.value);
		}
	}
	
	public onCancel(): void {
		this.dialogRef.close();
	}
}