import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { COMPONENTS } from './components';
import { ComponentMapService } from './component-map.service';
import { DynamicShellComponent } from './dynamic-shell.component';
import { SERVICES } from './services';
import { ComponentHostDirective } from './component-host.directive';

@NgModule({
	declarations: [
		AppComponent,
		COMPONENTS,
		ComponentHostDirective,
		DynamicShellComponent
	],
	imports: [
		BrowserModule
	],
	providers: [SERVICES, ComponentMapService],
	bootstrap: [AppComponent],
	entryComponents: [COMPONENTS]
})
export class AppModule { }
