import { Component, OnInit } from '@angular/core';
import { NgElement } from '@angular/elements';

import { ListDataService, CharacterDataService } from '../../services';

@Component({
	templateUrl: 'data-list.component.html',
	styleUrls: ['data-list.component.css']
})
export class DataListComponent implements OnInit {
	private data: any[];

	constructor(private dataSvc: ListDataService, private characterDataSvc: CharacterDataService) {}

	ngOnInit() {
		this.data = this.dataSvc.getData();
		this.characterElement();
	}

	onImgClick($event) {
		console.log($event);
	}

	characterElement() {
		const hanSoloData = this.characterDataSvc.getData()[0];
		const characterEl: NgElement = document.createElement(hanSoloData.type + '-element') as any;
		characterEl['data'] = hanSoloData;

		document.querySelector('#container').appendChild(characterEl);

		setTimeout(() => {
			const newData = this.characterDataSvc.getData()[2];
			characterEl['data'] = newData;
		}, 1000);
	}
}
