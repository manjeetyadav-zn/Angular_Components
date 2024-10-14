import { Component, Input } from '@angular/core';
@Component({
  selector: 'InputContainer',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.css'],
})
export class InputContainerComponent {
  @Input() className:string = '';

  computeClass(){
    return 'zn-text-field-input-container '+ this.className ;
  }
}
