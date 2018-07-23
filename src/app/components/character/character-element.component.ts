import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { CharacterComponent } from './character.component';

@Component({ template: '' })
export class CharacterElementComponent {
	constructor(private injector: Injector) {
		const CharacterElement = createCustomElement(CharacterComponent, { injector });
		window.customElements.define('solo-character', CharacterElement);
	}
}
