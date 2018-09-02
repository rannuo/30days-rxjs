export const observer = {
  next: (value) => { console.log('value:', value); },
  error: (err) => { console.log('Error: ' + err); },
  complete: () => { console.log('complete'); }
}


/*=============================================
=            window            =
=============================================*/

// const { window, switchAll, map, count, windowToggle } = Rx.operators;
// const click = Rx.fromEvent(document.body, 'click')
// const source = Rx.interval(1000)
// const mouseDown = Rx.fromEvent(document, 'mousedown');
// const mouseUp = Rx.fromEvent(document, 'mouseup');


// click.pipe(
//   window(source),
//   map(obs => obs.pipe(count())),
//   switchAll()
// )
// .subscribe(observer)

// source.pipe(
//   windowToggle(mouseDown, () => mouseUp),
//   switchAll()
// )
// .subscribe(observer)



/*=====  End of window  ======*/


/*=============================================
=            groupBy            =
=============================================*/
const { take, groupBy, zip, map, reduce, mergeAll } = Rx.operators;
// const source = Rx.interval(500).pipe(take(5));

// source.pipe(
//   groupBy(x => x%2)
// )
// .subscribe(observer)

const people = [
  {name: 'Anna', score: 100, subject: 'English'},
  {name: 'Anna', score: 90, subject: 'Math'},
  {name: 'Anna', score: 96, subject: 'Chinese' }, 
  {name: 'Jerry', score: 80, subject: 'English'},
  {name: 'Jerry', score: 100, subject: 'Math'},
  {name: 'Jerry', score: 90, subject: 'Chinese' }, 
];

Rx.from(people)
  .pipe(
    zip(Rx.interval(300), x => x),
    groupBy(p => p.name),
    map(group => group.pipe(
      reduce(
        (acc, cur) => ({name: cur.name, score: acc.score + cur.score})
      )
    )),
    mergeAll()
  )
  .subscribe(observer)


/*=====  End of groupBy  ======*/

