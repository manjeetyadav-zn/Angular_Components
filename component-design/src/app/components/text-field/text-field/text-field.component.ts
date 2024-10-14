import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'TextField',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
})
export class TextFieldComponent {
  @Input() size: string = 'md';
  @Input() color: string = 'grey';
  @Input() className: string = '';
  @Input() horizontal: boolean = true;
  @Input() error: boolean = false;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Output() onClick = new EventEmitter<Event>();

  computeClass() {
    return (
      'zn-text-field ' + this.size + ' ' + this.color + ' ' + this.className
    );
  }

  onClickEvent(event: Event) {
    this.onClick.emit(event);
  }
}
