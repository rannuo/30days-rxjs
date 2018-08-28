
const observer = {
  next: (value) => { console.log(value); },
  error: (err) => { console.log('Error: ' + err); },
  complete: () => { console.log('complete'); }
}
/*=============================================
=            skip            =
=============================================*/

// const { skip } = Rx.operators;
// const source = Rx.interval(1000);
// const example = source.pipe(
//   skip(3)
// )

// example.subscribe({
//   next: (value) => { console.log(value); },
//   error: (err) => { console.log('Error: ' + err); },
//   complete: () => { console.log('complete'); }
// });
/*=====  End of skip  ======*/


/*=============================================
=            takeLast            =
=============================================*/
// const { take, takeLast } = Rx.operators;
// Rx.interval(1000)
//   .pipe(
//     take(6),
//     takeLast(2)
//   )
//   .subscribe(observer)

//source : ----0----1----2----3----4----5|
// takeLast(2)
// example: ------------------------------(45)|
/*=====  End of takeLast  ======*/


/*=============================================
=            last            =
=============================================*/

// const { last, take } = Rx.operators;

// Rx.interval(1000)
//   .pipe(
//     take(6),
//     last()
//   )
//   .subscribe(observer)

/*=====  End of last  ======*/



/*=============================================
=            concat            =
=============================================*/

// const { concat, take } = Rx.operators;

// const source = Rx.interval(1000).pipe(take(3));
// const source1 = Rx.of(3);
// const source2 = Rx.of(4, 5, 6);

// // source.pipe(
// //   concat(source1, source2)
// // )
// // .subscribe(observer)
// Rx.concat(source, source1,source2)
//   .subscribe(observer)


/*=====  End of concat  ======*/


/*=============================================
=            startWith            =
=============================================*/

// Rx.interval(1000)
//   .pipe(
//     Rx.operators.startWith(0)
//   )
//   .subscribe(observer)

/*=====  End of startWith  ======*/


/*=============================================
=            merge            =
=============================================*/

const { take } = Rx.operators;
const source = Rx.interval(500).pipe(take(3))
const source2 = Rx.interval(300).pipe(take(6))

Rx.merge(source, source2)
  .subscribe(observer);


/*=====  End of merge  ======*/





