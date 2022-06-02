import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appConnectionPages]'
})
export class ConnectionPagesDirective {

  constructor(public viewContainerRef:ViewContainerRef  ) 
  { }

}
