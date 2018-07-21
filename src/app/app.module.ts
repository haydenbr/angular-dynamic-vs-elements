import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyDynamicComponent } from './components/dynamic-component/dynamic.component';
import { DataService } from './data.service';
import { DynamicDirective } from './dynamic-component.directive';

@NgModule({
	declarations: [
		AppComponent,
		MyDynamicComponent,
		DynamicDirective
	],
	imports: [
		BrowserModule
	],
	providers: [DataService],
	bootstrap: [AppComponent],
	entryComponents: [MyDynamicComponent]
})
export class AppModule { }
