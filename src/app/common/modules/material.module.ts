import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule( {
	imports:
		[
			MatInputModule,
			MatCardModule,
            MatDividerModule,
            MatListModule,
            MatIconModule,
            MatToolbarModule,
            MatButtonModule,
            MatDialogModule,
            MatTooltipModule,
            MatSnackBarModule,
		],
	exports:
		[
			MatInputModule,
			MatCardModule,
            MatDividerModule,
            MatListModule,
            MatIconModule,
            MatToolbarModule,
            MatButtonModule,
            MatDialogModule,
            MatTooltipModule,
            MatSnackBarModule,
		]
} )
export class MaterialModule { }