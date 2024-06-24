import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

    constructor(private sessionService: SessionService, private router: Router) {}
  
	canActivate(): boolean {
		if (this.sessionService.isAuthenticated()) {
			return true;
		} else {
			this.router.navigate(['/login']);
			return false;
		}
	}
}