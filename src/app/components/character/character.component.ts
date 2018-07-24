import { ChangeDetectionStrategy, Component, Input, Output, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';

const selector = 'character';

@Component({
	selector,
	templateUrl: 'character.component.html',
	styleUrls: [ 'character.component.css' ],
	encapsulation: ViewEncapsulation.Native,
	// changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterComponent {
	static elementSelector = selector + '-element';
	@Input() data;
	@Output() movieClick = new Subject();
	private alt = false;

	get name() {
		return this.data && this.data.name;
	}

	get bio() {
		return this.data && this.data.bio;
	}

	get imageUrl() {
		return this.alt ? this.altImageUrl : this.data && this.data.imageUrl;
	}

	get altImageUrl() {
		return this.data && this.data.imageUrl.split('.')[0] + '-alt.jpg';
	}

	get movies() {
		return this.data && this.data.movies;
	}

	imageClick() {
		this.alt = !this.alt;
	}
}
