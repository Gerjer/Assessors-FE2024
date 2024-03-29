import { animate, group, query, style, transition, trigger } from "@angular/animations";

export const fader = trigger(
  'routeFaderAnimations', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          opacity: 0,
          width: '100%',
          transform: 'scale(0) translateY(100%)'
        })
      ]),
      query(':enter', [
        animate('600ms ease',
         style({
          opacity: 1,
          transform: 'scale(1) translateY(0)'
         }))
      ], { optional: true })
    ])
  ]
);

export const slider = trigger(
  'routeSliderAnimations', [
    transition('* => isLeft', slideTo('left')),
    transition('* => isRight', slideTo('right')),
    transition('isRight => *', slideTo('left')),
    transition('isLeft => *', slideTo('right')),
    transition('isLeft => isRight', slideTo('right')),
    transition('isRight => isLeft', slideTo('left'))
  ]
)

function slideTo(direction: string) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%' })
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ [direction]: '100%' }))
      ], optional),
      query(':enter', [
        animate('600ms ease', style({ [direction]: '0%' }))
      ], optional)
    ])
  ]
}

export const transformer = trigger(
  'routeTransformAnimations', [
    transition('* => isLeft', translateTo({x: -100, y: -100, rotate: -720})),
    transition('* => isRight', translateTo({x: 100, y: -100, rotate: 90})),
    transition('isRight => *', translateTo({x: -100, y: -100, rotate: 360})),
    transition('isLeft => *', translateTo({x: 100, y: -100, rotate: -360})),
  ]
)

function translateTo({x= 100, y= 0, rotate= 0}) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`})
    ]),
    query(':leave', [
      animate('600ms ease-out',
        style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`})
      )
    ], optional),
    query(':enter', [
      animate('600ms ease-out',
        style({ transform: 'translate(0, 0) rotate(0deg)'})
      )
    ])
  ];
}
