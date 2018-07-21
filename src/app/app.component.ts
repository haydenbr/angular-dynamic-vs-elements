import { Component, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { ListDataService } from './services';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	data: any[] = this.listDataSvc.getData();

	constructor(private listDataSvc: ListDataService) {}
}
