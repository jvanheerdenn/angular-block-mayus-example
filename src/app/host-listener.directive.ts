import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[test-directive]',
})
export class TestDirective {
  @HostListener('keydown', ['$event']) onKeyDown(e) {
    console.log(e.keyCode);
  }
}
