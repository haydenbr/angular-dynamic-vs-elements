import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
	selector: 'vehicle',
	templateUrl: 'vehicle.component.html',
	styleUrls: [ 'vehicle.component.css' ]
})
export class VehicleComponent {
	@Input() data;
}
