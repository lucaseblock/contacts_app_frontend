import { Injectable } from '@angular/core';
import { QuestionDialogComponent } from '../components/question-dialog/question-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogData } from 'src/app/types/dialog';
import { lastValueFrom } from 'rxjs';
import { AddEditContactComponent } from 'src/app/pages/secure/contacts/add-edit-contact/add-edit-contact.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorSnackbarComponent } from '../components/error-snackbar/error-snackbar.component';
import { ContactForm } from 'src/app/types/contacts';
import { SuccessSnackbarComponent } from '../components/success-snackbar/success-snackbar.component';

@Injectable({
  	providedIn: 'root'
})
export class UiService {

  	constructor(private dialog: MatDialog, private snackBar: MatSnackBar) { }

	public async showQuestionDialog(title: string, question: string, panelClass: string = 'full-screen-modal') {
		let dialogRef = this.dialog.open( QuestionDialogComponent, 
			{ 
				panelClass: panelClass,
				autoFocus: false, 
				data: <DialogData>{
					title: title,
					message: question,
					confirmButtonText: 'Yes',
					cancelButtonText: 'No',
				}
			});
		return await lastValueFrom(dialogRef.afterClosed());
	}

	public async showFormDialog(title: string, contactData: ContactForm = { name: '', last_name: '', phone: '' }, panelClass: string = 'full-screen-modal') {
		let dialogRef = this.dialog.open( AddEditContactComponent, 
			{ 
				panelClass: panelClass,
				autoFocus: false, 
				data: {
					title: title,
					...contactData
				}
			});
		return await lastValueFrom(dialogRef.afterClosed());
	}

	public openErrorSnackBar(message: string) {
		this.snackBar.openFromComponent( ErrorSnackbarComponent, {
			data: message,
			duration: 2000,
			panelClass: ['error-snackbar-container']
		});
	}

	public openSuccessSnackBar(message: string) {
		this.snackBar.openFromComponent( SuccessSnackbarComponent, {
			data: message,
			duration: 2000,
			panelClass: ['success-snackbar-container']
		});
	}
}