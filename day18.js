export const observer = {
  next: (value) => { console.log('value:', value); },
  error: (err) => { console.log('Error: ' + err); },
  complete: () => { console.log('complete'); }
}

function getPostData() {
  return fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
}


/*=============================================
=            concatMap            =
=============================================*/

// const { map, concatAll, concatMap, take } = Rx.operators;
// const source = Rx.fromEvent(document.body, 'click');

// source
//   .pipe(
//     map(e => Rx.interval(1000).pipe(take(3))),
//     concatAll()
//   )
//   .subscribe(observer)

// source.pipe(
//   concatMap(e => Rx.interval(1000).pipe(take(3)))
// )
// .subscribe(observer)


// source.pipe(
//   concatMap(
//     e => Rx.from(getPostData()),
//     (e, res, eIndex, resIndex) => res.title
//   )
// )
// .subscribe(observer)
/*=====  End of concatMap  ======*/


/*=============================================
=            switchMap            =
=============================================*/

// const { map, switchAll, switchMap } = Rx.operators;
// const source = Rx.fromEvent(document.body, 'click');

// source.pipe(
//   map(e => Rx.interval(1000)),
//   switchAll()
// )
// .subscribe(observer)

// source.pipe(
//   switchMap(e => Rx.interval(1000))
// )
// .subscribe(observer)

// source.pipe(
//   switchMap(e => Rx.from(getPostData()))
// )
// .subscribe(observer)
/*=====  End of switchMap  ======*/



/*=============================================
=            mergeMap            =
=============================================*/

const { map, take, mergeMap, mergeAll } = Rx.operators;
const source = Rx.fromEvent(document.body, 'click')

// source.pipe(
//   map(e => Rx.interval(1000).pipe(take(3))),
//   mergeAll()
// )
// .subscribe(observer)

// source.pipe(
//   mergeMap(e => Rx.interval(1000).pipe(take(3)))
// )
// .subscribe(observer)

source.pipe(
  mergeMap(
    e => getPostData(),
    (e, res, eIndex, resIndex) => res.title,
    3
  )
)
.subscribe(observer)

/*=====  End of mergeMap  ======*/

