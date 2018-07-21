import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[component-host]',
})
export class DynamicDirective {
	constructor(public viewContainerRef: ViewContainerRef) { }
}
