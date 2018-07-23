import { Component, ViewEncapsulation, Input, Output } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { Subject } from 'rxjs';

const selector = 'its-a-trap';

@Component({
	selector,
	template: `
	<img (click)="onClick($event)" style="display: block;" src="assets/its-a-trap.gif"/>
	<h3 style="color: black;">{{message}}</h3>
	`,
	encapsulation: ViewEncapsulation.Native
})
export class ItsATrapComponent {
	static elementSelector = selector + '-element';

	@Input() message: string;
	@Output() imgClick = new Subject();

	onClick($event: Event) {
		$event.stopPropagation();
		this.imgClick.next({ message: 'ITS A TRAP!!' });
	}
}
