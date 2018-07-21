import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
	selector: 'character',
	templateUrl: 'character.component.html',
	styleUrls: [ 'character.component.css' ]
})
export class CharacterComponent {
	@Input() data;
	@Output() movieClick = new Subject();

	get bio() {
		return this.data.bio;
	}

	get imageUrl() {
		return this.data.imageUrl;
	}

	get movies() {
		return this.data.movies;
	}
}
