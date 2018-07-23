import { Component, OnInit } from '@angular/core';

import { ListDataService } from '../../services';

@Component({
	templateUrl: 'data-list.component.html',
	styleUrls: ['data-list.component.css']
})
export class DataListComponent implements OnInit {
	private data: any[];

	constructor(private dataSvc: ListDataService) {}

	ngOnInit() {
		this.data = this.dataSvc.getData();
	}

	onImgClick($event) {
		console.log($event);
	}
}
