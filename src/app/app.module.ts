import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CONTAINERS } from './containers';
import { SERVICES } from './services';
import { AppComponentsModule } from './components';

@NgModule({
	declarations: [
		AppComponent,
		CONTAINERS,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AppComponentsModule
	],
	providers: [SERVICES],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
