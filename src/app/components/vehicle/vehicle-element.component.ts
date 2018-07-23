import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { VehicleComponent } from './vehicle.component';

@Component({ template: '' })
export class VehicleElementComponent {
	constructor(private injector: Injector) {
		const VehicleElement = createCustomElement(VehicleComponent, { injector });
		window.customElements.define('solo-vehicle', VehicleElement);
	}
}
