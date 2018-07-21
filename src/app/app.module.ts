import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { COMPONENTS } from './components';
import { ComponentMapService } from './components/component-map.service';
import { DataService } from './data.service';
import { ComponentHostDirective } from './component-host.directive';

@NgModule({
	declarations: [
		AppComponent,
		COMPONENTS,
		ComponentHostDirective
	],
	imports: [
		BrowserModule
	],
	providers: [DataService, ComponentMapService],
	bootstrap: [AppComponent],
	entryComponents: [COMPONENTS]
})
export class AppModule { }
