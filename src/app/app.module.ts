import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ItsATrapComponent } from './its-a-trap.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { COMPONENTS } from './components';
import { CONTAINERS } from './containers';
import { SERVICES } from './services';

@NgModule({
	declarations: [
		AppComponent,
		COMPONENTS,
		CONTAINERS,
		ItsATrapComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [SERVICES],
	bootstrap: [AppComponent],
	entryComponents: [COMPONENTS, ItsATrapComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
	constructor() {}
}
