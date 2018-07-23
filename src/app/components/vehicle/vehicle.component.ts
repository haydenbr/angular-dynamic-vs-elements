import { ChangeDetectionStrategy, Component, Input, Output, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';

const selector = 'vehicle';

@Component({
	selector,
	templateUrl: 'vehicle.component.html',
	styleUrls: [ 'vehicle.component.css' ],
	encapsulation: ViewEncapsulation.Native,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleComponent {
	static elementSelector = selector + '-element';

	@Input() data;

	get imageUrl() {
		return this.data && this.data.imageUrl;
	}

	get description() {
		return this.data && this.data.description;
	}

	get name() {
		return this.data && this.data.name;
	}
}
