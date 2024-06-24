import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse
} from '@angular/common/http';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UiService } from '../../ui.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private uiService: UiService) {}

	intercept(request: HttpRequest<HttpErrorResponse>, next: HttpHandler) {
		return next.handle(request).pipe(
			catchError((error: HttpErrorResponse) => {
				const errorMessage = error.error.error || 'Something went wrong';
				this.uiService.openErrorSnackBar(errorMessage);
				return EMPTY;
			})
		);
	}
}