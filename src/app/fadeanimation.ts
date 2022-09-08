import {animate, group, query, style, transition, trigger} from "@angular/animations";

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    query(':enter', [
        style({ opacity: 0 })
      ], { optional: true }
    ),
    group([
      query(':leave', [
          animate(300, style({ opacity: 0 }))
        ],
        { optional: true }
      ),
      query(':enter', [
          style({ opacity: 0 }),
          animate(300, style({ opacity: 1 }))
        ],
        { optional: true }
      )
    ])
  ])
]);

//trigger("fadeAnimation", [
//   transition("* => *", [
//       query(":leave",[
//         style({opacity: 1}),
//         animate("0.5s", style({opacity: 0}))
//       ], {optional: true}),
//
//       query(":enter", [
//         style({opacity: 0}),
//         animate("0.5s", style({opacity: 1}))
//       ], {optional: true}),
//   ]),
