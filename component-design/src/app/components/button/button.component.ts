import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'Button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() size: string = 'md';
  @Input() color: string = 'grey';
  @Input() className: string = '';
  @Input() variant: ButtonVariants = 'primary';
  @Input() error: boolean = false;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Output() onClick = new EventEmitter<Event>();

  private variants: {
    loading: {};
    iconOnly: {};
    size: { [key: string]: string };
    variant: { [key: string]: string };
  } = {
    loading: {
      true: '',
    },
    iconOnly: {
      true: 'p-0',
    },
    size: {
      xs: 'h-[28px] px-12 text-sm-medium',
      sm: 'h-[32px] px-16 text-sm-medium',
      md: 'h-[44px] px-[20px] text-base-medium',
      lg: 'h-[56px] px-[20px] text-base-medium',
    },
    variant: {
      text: 'max-w-max p-0 text-blue-500 hover:text-blue-400 focus-visible:outline-none active:text-blue-200 data-disabled:text-blue-200',
      primary:
        ' bg-blue-500 bg-gradient-to-t from-[rgba(42,200,232,0.15)] to-[rgba(3,129,155,0.15)] text-white hover:from-blue-600 hover:to-blue-600 focus-visible:outline-blue-100 active:from-blue-700 active:to-blue-700 data-disabled:from-blue-200 data-disabled:to-blue-200 data-disabled:text-white data-disabled:hover:from-blue-200 data-disabled:hover:to-blue-200',
      secondary:
        'bg-gradient-to-t from-[#cce5ebff] to-[#deeef2ff] text-blue-500 hover:from-blue-50 hover:to-blue-50 focus-visible:outline-blue-50 active:from-blue-100 active:to-blue-100 data-disabled:from-blue-25 data-disabled:to-blue-25 data-disabled:text-blue-200 data-disabled:hover:from-blue-25 data-disabled:hover:to-blue-25',
      outlined:
        'text-blue-500 shadow-[0px_0px_0px_2px_inset] shadow-blue-400 hover:bg-blue-50 focus-visible:outline-blue-100 active:bg-blue-100 data-disabled:text-blue-200 data-disabled:shadow-blue-200 data-disabled:hover:bg-transparent',
      'secondary-light':
        'text-blue-500 hover:bg-blue-50 focus-visible:outline-blue-100 active:bg-blue-100 data-disabled:text-blue-200 data-disabled:hover:bg-transparent',
      destructive:
        'bg-error-100 text-white hover:bg-[#C94754] focus-visible:outline-error-75 active:bg-error-200 data-disabled:bg-error-75 data-disabled:hover:bg-error-75',
      'destructive-light':
        'text-error-100 hover:bg-error-50 focus-visible:outline-error-75 active:bg-error-75 data-disabled:text-error-75 data-disabled:hover:bg-transparent',
      'transparent-light':
        'text-blue-900 hover:bg-grey-50 focus-visible:outline-grey-50 active:bg-grey-50 data-disabled:text-grey-500 data-disabled:hover:bg-transparent',
      'transparent-light-outlined':
        'text-blue-900 shadow-[0px_0px_0px_1px_inset] shadow-grey-700 hover:bg-grey-50 focus-visible:outline-grey-50 active:bg-grey-50 data-disabled:text-grey-500 data-disabled:shadow-grey-50 data-disabled:hover:bg-transparent',
      'transparent-dark':
        'text-white hover:bg-blue-800 focus-visible:outline-blue-800 active:bg-blue-800 data-disabled:text-grey-900 data-disabled:hover:bg-transparent',
      'transparent-dark-outlined':
        ' text-white shadow-[0px_0px_0px_1px_inset] shadow-grey-700 hover:bg-blue-800 focus-visible:outline-blue-800 active:bg-blue-800 data-disabled:text-grey-900 data-disabled:shadow-blue-800 data-disabled:hover:bg-transparent',
    },
  };
  computeClass() {
    return (
      'relative flex items-center justify-center gap-8 whitespace-nowrap rounded-md ' +
      'transition focus-visible:outline focus-visible:outline-[5px] ' +
      'data-disabled:cursor-not-allowed data-disabled:outline-none ' +
      this.variants.size[this.size] +
      ' ' +
      this.variants.variant[this.variant] +
      ' ' +
      this.className
    );
  }

  onClickEvent(event: Event) {
    this.onClick.emit(event);
  }
}
export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'secondary-light'
  | 'outlined'
  | 'destructive'
  | 'destructive-light'
  | 'transparent-light'
  | 'transparent-light-outlined'
  | 'transparent-dark'
  | 'transparent-dark-outlined'
  | 'text';

export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg';
