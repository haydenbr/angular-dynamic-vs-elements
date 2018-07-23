import { NgModule } from '@angular/core';
import { Route, RouterModule, ExtraOptions, PreloadAllModules } from '@angular/router';

import { DataListComponent, PageNotFoundComponent } from './containers';

const routes: Route[] = [
	{ path: 'list', component: DataListComponent },
	{ path: '', redirectTo: 'list', pathMatch: 'full' },
	{ path: 'not-found', component: PageNotFoundComponent },
	{ path: '**', redirectTo: 'not-found' }
];

const routingConfig: ExtraOptions = {
	preloadingStrategy: PreloadAllModules
};

@NgModule({
	imports: [RouterModule.forRoot(routes, routingConfig)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
