import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, map } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  	providedIn: 'root'
})
export class SessionService {
  	private apiUrl: string = environment.base_url;

	constructor(private http: HttpClient, private router: Router) {}

	public login(username: string, password: string): Promise<{ token: string }> {
		const response = this.http.post<{ token: string }>(`${this.apiUrl}/login`, { username, password })
		  	.pipe(map(response => {
			if (response?.token) {
				sessionStorage.setItem('token', response.token);
			}
			return response;
		}))
		return firstValueFrom(response);
	}

	public logout(): void {
		sessionStorage.removeItem('token');
		this.router.navigate(['/login']);
	}

	public register(username: string, password: string): Promise<{ id: number }> {
		const response = this.http.post<{ id: number }>(`${this.apiUrl}/register`, { username, password })
		return firstValueFrom(response);
	}

	public getToken(): string | null {
		const token = sessionStorage.getItem('token');
		return token || null;
	}
	
	public isAuthenticated(): boolean {
		return this.getToken() !== null;
	}
}