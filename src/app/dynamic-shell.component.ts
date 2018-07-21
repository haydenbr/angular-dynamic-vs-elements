import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { ComponentHostDirective } from './component-host.directive';
import { ComponentMapService } from './component-map.service';

@Component({
	selector: 'dynamic-shell',
	template: '<ng-template component-host></ng-template>'
})

export class DynamicShellComponent implements OnInit {
	@Input() data;
	@ViewChild(ComponentHostDirective) componentHost: ComponentHostDirective;

	constructor(
		private componentMapSvc: ComponentMapService,
		private factory: ComponentFactoryResolver
	) { }

	ngOnInit() {
		// get the factory for the desired component
		const componentType = this.componentMapSvc.lookupComponent('character');
		const componentFactory = this.factory.resolveComponentFactory(componentType);
		// get reference to the view container in which we'll create this new component
		const viewContainerRef = this.componentHost.viewContainerRef;
		// clear out whatever was previously in that view container
		viewContainerRef.clear();
		const componentRef = viewContainerRef.createComponent(componentFactory);

		// attach character @Input() data
		(<any>componentRef.instance).data = this.data;
	}
}
