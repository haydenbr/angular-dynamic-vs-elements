import { Component, Input, Output, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
	selector: 'vehicle',
	templateUrl: 'vehicle.component.html',
	styleUrls: [ 'vehicle.component.css' ],
	encapsulation: ViewEncapsulation.Native
})
export class VehicleComponent {
	@Input() data;

	get imageUrl() {
		return this.data.imageUrl;
	}

	get description() {
		return this.data.description;
	}

	get name() {
		return this.data.name;
	}
}
