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
	private alt = false;

	get name() {
		return this.data.name;
	}

	get bio() {
		return this.data.bio;
	}

	get imageUrl() {
		return this.alt ? this.altImageUrl : this.data.imageUrl;
	}

	get altImageUrl() {
		return this.data.imageUrl.split('.')[0] + '-alt.jpg';
	}

	get movies() {
		return this.data.movies;
	}

	imageClick() {
		this.alt = !this.alt;
	}
}
