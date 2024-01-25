import { animate, state, style, transition, trigger } from "@angular/animations";

export const rotateMenuIcon90deg = trigger(
  'expand_menu', [
    state('collapsed', style({ transform: 'rotate(0deg)' })),
    state('expand', style({ transform: 'rotate(90deg)' })),
    transition('expand<=>collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)'))
  ]
);

export const subMenuState = trigger('expandOpenClosed', [
  state('void', style({
    // transform: 'translateY(-100%)',
    height: '0px'
  })),
  state('*', style({
    // transform: 'translateY(0)',
    height: '*'
  })),
  transition(':enter, :leave', animate('300ms ease-in-out'))
])

// export const subMenuState = trigger('fadeInOut', [
//   state('in', style({ opacity: 1 })),
//   transition('void => *', [
//     style({ opacity: 0 }),
//     animate(300)
//   ]),
//   transition('* => void', [
//     animate(300, style({ opacity: 0 }))
//   ])
// ]);

// export const subMenuState = trigger(
//   'expandOpenClosed', [
//     state('open', style({ height: '*' })),
//     state('closed', style({ height: '0px' })),
//     transition('open <=> closed', animate('300ms ease-in-out'))
//   ]
// )
