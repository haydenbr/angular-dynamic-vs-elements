import { Injectable, ComponentFactoryResolver } from '@angular/core';

import { COMPONENTS } from './components';

@Injectable()
export class ComponentMapService {
	private map: any = {};

	constructor(private resolver: ComponentFactoryResolver) {
		COMPONENTS.forEach((c: any) => {
			const factory = this.resolver.resolveComponentFactory(c);
			this.map[factory.selector] = c;
		});
	}

	lookupComponent(selector: string) {
		return this.map[selector];
	}
}
