import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { MatDialog } from '@angular/material/dialog';
import { UiService } from '../../services/ui.service';

@Component({
	selector: 'header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  	constructor(private sessionService: SessionService, public dialog: MatDialog, private uiService: UiService) {}

	public async logout(): Promise<void> {
		let ret = await this.uiService.showQuestionDialog('Log out', 'Are you sure you want to log out?');
		if (ret) {
			this.sessionService.logout();
		}
	}

}