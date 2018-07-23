import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'its-a-trap',
	template: `<img src="assets/its-a-trap.gif"/>`,
	encapsulation: ViewEncapsulation.Native
})
export class ItsATrapComponent {
	constructor() { }
}
