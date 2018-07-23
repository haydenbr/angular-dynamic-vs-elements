import { Component, ViewChild, ComponentFactoryResolver } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<h1 style="color: black;">
			Solo: Dynamic Components vs Angular Elements
		</h1>
		<router-outlet></router-outlet>
	`
})
export class AppComponent {}
