import { animate, state, style, transition, trigger } from "@angular/animations";

export const toolbarState = trigger('toolbarAnimation', [
  state('void', style({transform: 'translateY(-100%)'})),
  state('*', style({transform: 'translateY(0)'})),
  transition(':enter, :leave', animate('300ms ease-in-out'))
])
