import { Component, Input } from '@angular/core';

@Component({
  selector: 'Unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent {
  @Input() className:string = '';

  computeClass(){
    return 'zn-text-field-unit '+ this.className ;
  }
}
