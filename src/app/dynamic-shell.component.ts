import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
import { Subject } from 'rxjs';
import { ComponentHostDirective } from './directives';
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
	) {}

	ngOnInit() {
		// lookup component class by component selector
		const componentType = this.componentMapSvc.lookupComponent(this.data.type);
		// get the factory for the desired component
		const componentFactory = this.factory.resolveComponentFactory(componentType);
		// get reference to the view container in which we'll create this new component
		const viewContainerRef = this.componentHost.viewContainerRef;
		// clear out whatever was previously in that view container
		viewContainerRef.clear();
		// create component on view container
		const componentRef: ComponentRef<any> = viewContainerRef.createComponent(componentFactory);
		// attach character @Input() data
		componentRef.instance.data = this.data;

		(componentRef.instance.movieClick || { subscribe: () => {} }).subscribe(() => console.log('hey'));
	}
}
