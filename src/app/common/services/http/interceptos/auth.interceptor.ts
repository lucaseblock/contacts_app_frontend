import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { SessionService } from '../../session.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  	constructor(private sessionService: SessionService) {}

  	intercept(request: HttpRequest<HttpInterceptor>, next: HttpHandler) {
		const token = this.sessionService.getToken();
			if (token) {
				request = request.clone({
					setHeaders: {
						Authorization: `Bearer ${token}`
					}
				});
			}
		return next.handle(request);
    }
}