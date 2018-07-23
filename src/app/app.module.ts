import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { COMPONENTS } from './components';
import { CONTAINERS } from './containers';
import { DIRECTIVES } from './directives';
import { ComponentMapService } from './component-map.service';
import { DynamicShellComponent } from './dynamic-shell.component';
import { SERVICES } from './services';

@NgModule({
	declarations: [
		AppComponent,
		COMPONENTS,
		CONTAINERS,
		DIRECTIVES,
		DynamicShellComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [SERVICES, ComponentMapService],
	bootstrap: [AppComponent],
	entryComponents: [COMPONENTS]
})
export class AppModule { }
