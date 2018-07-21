import { Injectable, ComponentFactoryResolver, Type } from '@angular/core';

import { COMPONENTS } from '../components';

@Injectable()
export class ComponentMapService {
	private map: { [key: string]: Type<any> } = {};

	constructor(private resolver: ComponentFactoryResolver) {
		COMPONENTS.forEach((c) => {
			const factory = this.resolver.resolveComponentFactory(c);
			this.map[factory.selector] = c;
		});
	}

	lookupComponent(selector: string) {
		return this.map[selector];
	}
}
