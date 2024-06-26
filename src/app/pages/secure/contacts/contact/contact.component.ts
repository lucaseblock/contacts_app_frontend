import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContactsService } from 'src/app/common/services/api/contacts.service';
import { UiService } from 'src/app/common/services/ui.service';
import { Contact, ContactForm } from 'src/app/types/contacts';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  	@Input() contact!: Contact;
	@Output() getContacts: EventEmitter<boolean> = new EventEmitter<boolean>(false);

	constructor(private uiService: UiService, private contactsService: ContactsService) {}

	public async editContact(): Promise<void> {
		let res: ContactForm = await this.uiService.showFormDialog('Edit contact', this.contact);
		if (res) {
			this.uiService.showLoadingSpinner();
			await this.contactsService.editContact(this.contact.id, res);
			this.getContacts.emit(true);
			this.uiService.openSuccessSnackBar('Contact updated');
		}
	}

	public async deleteContact(): Promise<void> {
		const lastName: string = this.contact.last_name ? ` ${this.contact.last_name}` : '';
		let res = await this.uiService.showQuestionDialog('Delete contact', `Are you sure you want to delete ${this.contact.name}${lastName}?`);
		if (res) {
			this.uiService.showLoadingSpinner();
			await this.contactsService.deleteContact(this.contact.id);
			this.getContacts.emit(true);
			this.uiService.openSuccessSnackBar('Contact deleted');
		}
	}

	public callContact(): void {
		window.location.href = `tel:${this.contact.phone}`;
	}

}