import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from 'src/app/types/dialog';

@Component({
	selector: 'app-question-dialog',
	templateUrl: './question-dialog.component.html',
	styleUrls: ['./question-dialog.component.scss']
})
export class QuestionDialogComponent {
	public title: string = '';
	public message: string = '';
	public confirmButtonText: string = '';
	public cancelButtonText: string = '';

  	constructor(public dialogRef: MatDialogRef<QuestionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
		this.title = data.title;
		this.message = data.message;
		this.confirmButtonText = data.confirmButtonText;
		this.cancelButtonText = data.cancelButtonText;
	}

	public onNoClick(): void {
		this.dialogRef.close(false);
	}
	
	public onYesClick(): void {
		this.dialogRef.close(true);
	}

}