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

		const componentFactory = this.componentFactoryResolver.resolveComponentFactory(MyDynamicComponent);
		const viewContainerRef = this.componentHost.viewContainerRef;
		viewContainerRef.clear();

		const componentRef = viewContainerRef.createComponent(componentFactory);
		(<any>componentRef.instance).character = character;
	}

	getCharacters() {
		this.interval = setInterval(() => this.loadComponent(), 3000);
	}
}
