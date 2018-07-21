import { Component, OnInit, OnDestroy, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { DataService } from './data.service';
import { DynamicDirective } from './dynamic-component.directive';
import { MyDynamicComponent } from './components/dynamic-component/dynamic.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
	characters: any[] = this.dataSvc.getData();
	@ViewChild(DynamicDirective) componentHost: DynamicDirective;
	interval: any;

	constructor(
		private dataSvc: DataService,
		private componentFactoryResolver: ComponentFactoryResolver
	) {}

	ngOnInit() {
		this.getCharacters();
		this.loadComponent();
	}

	ngOnDestroy() {
		window.clearInterval(this.interval);
	}

	loadComponent() {
		const index = Math.floor(this.characters.length * Math.random());
		const character = this.characters[index];

		// get the factory for the desired component
		/*
		TODO: I don't like that you have to pass the component class here. I wish I could create
		a dynamic component using the component selector. I guess I would have to keep a map of
		*/

		const componentFactory = this.componentFactoryResolver.resolveComponentFactory(MyDynamicComponent);
		// get reference to the view container in which we'll create this new component
		const viewContainerRef = this.componentHost.viewContainerRef;
		// clear out whatever was previously in that view container
		viewContainerRef.clear();
		const componentRef = viewContainerRef.createComponent(componentFactory);

		// attach character @Input() data
		(<any>componentRef.instance).character = character;
	}

	getCharacters() {
		this.interval = setInterval(() => this.loadComponent(), 3000);
	}
}
