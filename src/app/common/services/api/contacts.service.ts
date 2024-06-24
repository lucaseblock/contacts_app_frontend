import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Contact, ContactForm } from 'src/app/types/contacts';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ContactsService {
	private apiUrl: string = environment.base_url;

	constructor(private http: HttpClient) {}

	public getContacts(): Promise<Contact[]> {
		const response = this.http.get<Contact[]>(`${this.apiUrl}/contacts`)
		return firstValueFrom(response);
	}

	public deleteContact(id: number): Promise<{ message: string }> {
		const response = this.http.delete<{ message: string }>(`${this.apiUrl}/contact/${id}`)
		return firstValueFrom(response);
	}

	public addContact(data: ContactForm): Promise<{ id: number }> {
		const response = this.http.post<{ id: number }>(`${this.apiUrl}/contact`, data)
		return firstValueFrom(response);
	}

	public editContact(id: number, data: ContactForm): Promise<{ message: string }> {
		const response = this.http.put<{ message: string }>(`${this.apiUrl}/contact/${id}`, data)
		return firstValueFrom(response);
	}
}