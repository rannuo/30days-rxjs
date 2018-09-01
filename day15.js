const observer = {
  next: (value) => { console.log('value:', value); },
  error: (err) => { console.log('Error: ' + err); },
  complete: () => { console.log('complete'); }
}


/*=============================================
=            distinct            =
=============================================*/

const { distinct, zip } = Rx.operators;

// const source = Rx.from(['a', 'b', 'c', 'a', 'b'])
//   .pipe(
//     zip(Rx.interval(300), (x, y) => x),
//     distinct()
//   )
//   .subscribe(observer)

// const source = Rx.from([{ value: 'a'}, { value: 'b' }, { value: 'c' }, { value: 'a' }, { value: 'c' }])
//   .pipe(
//     zip(Rx.interval(300), (x, y) => x),
//     distinct(x => x.value)
//   )
//   .subscribe(observer)

// const source = Rx.from(['a', 'b', 'c', 'a', 'c'])
//   .pipe(
//     zip(Rx.interval(300), (x, y) => x),
//     distinct(null, Rx.interval(1300))
//   )
//   .subscribe(observer)


/*=====  End of distinct  ======*/


/*=============================================
=            distinctUtilChanged            =
=============================================*/

const { distinctUntilChanged } = Rx.operators;
const source = Rx.from(['a', 'b', 'c', 'c', 'b'])
  .pipe(
    zip(Rx.interval(300), (x, y) => x),
    distinctUntilChanged()
  )
  .subscribe(observer)



/*=====  End of distinctUtilChanged  ======*/



