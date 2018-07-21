import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { COMPONENTS } from './components';
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
	providers: [DataService],
	bootstrap: [AppComponent],
	entryComponents: [COMPONENTS]
})
export class AppModule { }
