import { trigger, state, animate, style, transition } from '@angular/core';

export function hoverShadow() {
  return trigger('hoverShadow', [
    state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) translateY(0)'
    })),
    state('shadow', style({
        'background-color': 'blue',
        transform: 'translateX(-5px) translateY(-5px)'
    })),
    transition('normal => shadow', animate('1s')),
    transition('shadow => normal', animate('2s'))
  ]);
}