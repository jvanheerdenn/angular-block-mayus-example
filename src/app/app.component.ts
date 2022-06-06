import { Component, HostListener, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostListener('keydown', ['$event']) onKeyDown(e) {
    console.log('keyCode: ', e.keyCode);
    if(e.keyCode === 20){
      this.showUppercase = !this.showUppercase;
    }
  }
  name = 'Angular ' + VERSION.major;
  value = '';
  showUppercase = false;
}
