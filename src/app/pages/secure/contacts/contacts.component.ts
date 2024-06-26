import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/common/services/api/contacts.service';
import { UiService } from 'src/app/common/services/ui.service';
import { Contact, ContactForm } from 'src/app/types/contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
	public contacts: Contact[] = [];
	public filteredContacts: Contact[] = [];
	public searchTerm: string = '';

  	constructor(private contactsService: ContactsService, private uiService: UiService) {}

	ngOnInit(): void {
		this.uiService.showLoadingSpinner();
		this.getContacts();
	}

	public async getContacts(): Promise<void> {
		this.contacts = await this.contactsService.getContacts();
		this.contacts.sort((a, b) => a.name.localeCompare(b.name));
		this.filteredContacts = this.contacts;
		this.searchTerm = '';
		this.uiService.hideLoadingSpinner();
	}
	
	private filterContacts(searchTerm: string): void {
		this.filteredContacts = this.contacts.filter(contact =>
		  	contact.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}

	public onSearchTermChange(searchTerm: string): void {
		this.filterContacts(searchTerm);
	}

	public async addContact(): Promise<void> {
		let res: ContactForm = await this.uiService.showFormDialog('New contact');
		if (res) {
			this.uiService.showLoadingSpinner();
			await this.contactsService.addContact(res);
			this.uiService.openSuccessSnackBar('Contact added');
			this.getContacts();
		}
	}

	get showLoadingSpinner (): boolean {
		return this.uiService.spinnerIsLoading;
	}

}