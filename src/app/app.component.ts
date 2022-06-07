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
    if (e.key === 'CapsLock') {
      this.showUppercase = e.getModifierState('CapsLock');
      this.lastUppercaseState = e.getModifierState('CapsLock');
      return;
    }

    if (e.key === 'Shift' && e.getModifierState('CapsLock')) {
      this.showUppercase = false;
      this.lastUppercaseState = false;
      return;
    }

    if (e.key === 'Shift') {
      this.showUppercase = e.getModifierState('Shift');
      this.lastUppercaseState = e.getModifierState('Shift');
    }
  }

  @HostListener('keyup', ['$event']) onKeyUp(e: KeyboardEvent) {
    if (e.key === 'Shift' && e.getModifierState('CapsLock')) {
      this.showUppercase = true;
      this.lastUppercaseState = true;
      return;
    }

    if (e.key === 'Shift') {
      this.showUppercase = e.shiftKey;
      this.lastUppercaseState = e.shiftKey;
    }
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
