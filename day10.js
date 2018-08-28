
const observer = {
  next: (value) => { console.log(value); },
  error: (err) => { console.log('Error: ' + err); },
  complete: () => { console.log('complete'); }
}

/*=============================================
=            combineLatest            =
=============================================*/
// const { take, combineLatest } = Rx.operators;
// const source = Rx.interval(500).pipe(take(3))
// const source2 = Rx.interval(300).pipe(take(6))

// // source.pipe(
// //   combineLatest(source2, (x, y) => x + y)
// // )
// // .subscribe(observer)

// Rx.combineLatest(source, source2, (x, y) => x * y)
//   .subscribe(observer)

/*=====  End of combineLatest  ======*/


/*=============================================
=            zip            =
=============================================*/

// const { take, zip } = Rx.operators;
// const source = Rx.interval(500).pipe(take(3))
// const source2 = Rx.interval(300).pipe(take(6))

// source.pipe(
//   zip(source2, (x, y) => x + y)
// )
// .subscribe(observer)

/*=====  End of zip  ======*/


/*=============================================
=            withLatestFrom            =
=============================================*/

const { withLatestFrom } = Rx.operators;
const main = Rx.zip(
  Rx.from('hello'),
  Rx.interval(500),
  (x, y) => x
);

const some = Rx.zip(
  Rx.from([0,1,0,0,0,1]),
  Rx.interval(300),
  (x, y) => x
)

main.pipe(
  withLatestFrom(some, (x, y) => {
    return y === 1 ? x.toUpperCase() : x;
  })
)
.subscribe(observer)


/*=====  End of withLatestFrom  ======*/



