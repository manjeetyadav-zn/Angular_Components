import { Component, Input } from '@angular/core';
@Component({
  selector: 'HelperText',
  templateUrl: './helper-text.component.html',
  styleUrls: ['./helper-text.component.css'],
})
export class HelperTextComponent {
  @Input() className:string = '';

  computeClass(){
    return 'zn-text-field-helper-text '+ this.className ;
  }
}
