import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { COMPONENTS } from './components';
import { SERVICES } from './services';
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
	providers: [SERVICES],
	bootstrap: [AppComponent],
	entryComponents: [COMPONENTS]
})
export class AppModule { }
