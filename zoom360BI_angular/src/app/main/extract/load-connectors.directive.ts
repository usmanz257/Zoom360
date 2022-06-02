import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLoadConnectors]'
})
export class LoadConnectorsDirective {

  constructor(public viewContainerRef:ViewContainerRef) { }

}
