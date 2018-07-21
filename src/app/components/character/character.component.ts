import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
	selector: 'character',
	templateUrl: 'character.component.html',
	styleUrls: [ 'character.component.css' ]
})
export class CharacterComponent {
	@Input() character;
	@Output() movieClick = new Subject();
}
