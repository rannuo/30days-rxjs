
const { take, first, takeUntil, concatAll, map } = Rx.operators;
/*=============================================
=            take, first, takeUntil, concatAll            =
=============================================*/


// const source = Rx.interval(1000);

// const click = Rx.fromEvent(document.body, 'click');

// source
//   .pipe(
//     // take(3)
//     // first()
//     takeUntil(click)
//   )
// click.pipe(
//   map(() => Rx.of(1, 2, 3)),
//   concatAll()
// )
//   .subscribe({
//     next: (value) => { console.log(value); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log('complete'); }
//   })

// const obs1 = Rx.interval(1000).pipe(take(5));
// const obs2 = Rx.interval(1000).pipe(take(2));
// const obs3 = Rx.interval(1000).pipe(take(1));

// Rx.of(obs1, obs2, obs3)
//   .pipe(
//     concatAll()
//   )
//   .subscribe(console.log)


/*=====  End of take, first, takeUntil, concatAll  ======*/



/*=============================================
=            drag            =
=============================================*/

const drag = document.getElementById('drag');

const mouseDown = Rx.fromEvent(drag, 'mousedown')
const mouseMove = Rx.fromEvent(document.body, 'mousemove')
const mouseUp = Rx.fromEvent(document.body, 'mouseup')

const source = mouseDown.pipe(
  map(() => mouseMove.pipe(takeUntil(mouseUp))),
  concatAll(),
  map(m => ({
    x: m.clientX,
    y: m.clientY,
  }))
)
.subscribe(pos => {
  drag.style.left = pos.x + 'px'
  drag.style.top = pos.y + 'px'
})



/*=====  End of drag  ======*/

