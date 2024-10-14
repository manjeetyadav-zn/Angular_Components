import { Component } from '@angular/core';
import {
  ButtonSizes,
  ButtonVariants,
} from './components/button/button.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  heading = 'ZeroNorth Bunker Design';
  buttonSize: ButtonSizes = 'xs';
  buttonVarient: ButtonVariants = 'primary';
  buttonClicked(e: Event) {
    alert(this.heading);
  }
}
