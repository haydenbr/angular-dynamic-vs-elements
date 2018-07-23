import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

import { CharacterComponent } from './character/character.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ItsATrapComponent } from './its-a-trap/its-a-trap.component';

const COMPONENTS = [
	CharacterComponent,
	VehicleComponent,
	ItsATrapComponent
];

@NgModule({
	imports: [BrowserModule],
	exports: [COMPONENTS],
	declarations: [COMPONENTS],
	entryComponents: [COMPONENTS]
})
export class AppComponentsModule {
	constructor(injector: Injector) {
		COMPONENTS.forEach((component) => {
			const strategyFactory = new ElementZoneStrategyFactory(component, injector);
			const element = createCustomElement(component, { injector, strategyFactory });
			window.customElements.define(component.elementSelector, element);
		});
	}
}
