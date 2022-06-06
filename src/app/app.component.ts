import { Component, HostListener, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostListener('document:mouseover', ['$event']) onMouseOver(
    e: KeyboardEvent
  ) {
    // console.log('keyCode: ', e.getModifierState('CapsLock'));
    this.lastUppercaseState = e.getModifierState('CapsLock');
  }
  @HostListener('keydown', ['$event']) onKeyDown(e: KeyboardEvent) {
    this.showUppercase = e.getModifierState('CapsLock');
    this.lastUppercaseState = e.getModifierState('CapsLock');
  }
  value = '';
  lastUppercaseState = false;
  showUppercase = false;

  changeBlockMayusStatus(event: PointerEvent | FocusEvent) {
    if (event instanceof PointerEvent) {
      this.showUppercase = this.lastUppercaseState;
    }
    if (event instanceof FocusEvent) {
      this.showUppercase = false;
    }
    // console.log(this.showUppercase, event);
  }
}
