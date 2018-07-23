import { Component, ViewChild, ComponentFactoryResolver, Injector } from '@angular/core';
import { createCustomElement, NgElement, WithProperties, NgElementConstructor } from '@angular/elements';

import { ItsATrapComponent } from './its-a-trap.component';

@Component({
	selector: 'app-root',
	template: `
		<h1 style="color: black;">
			Solo: Dynamic Components vs Angular Elements
		</h1>
		<router-outlet></router-outlet>
	`
})
export class AppComponent {
	constructor(private injector: Injector) {
		const ItsATrapElement = createCustomElement(ItsATrapComponent, { injector });
		customElements.define('admiral-ackbar', ItsATrapElement);
	}
}
