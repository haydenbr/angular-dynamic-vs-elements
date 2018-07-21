import { Component, Input } from '@angular/core';

@Component({
	selector: 'my-component',
	templateUrl: '../component.html',
	styleUrls: [ '../component.css' ]
})
export class MyDynamicComponent {
	@Input() character;
}
