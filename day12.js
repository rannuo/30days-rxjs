
const observer = {
  next: (value) => { console.log('value:', value); },
  error: (err) => { console.log('Error: ' + err); },
  complete: () => { console.log('complete'); }
}
/*=============================================
=            scan            =
=============================================*/

// const { scan } = Rx.operators;

// Rx.from('hello')
//   .pipe(
//     scan((origin, next) => origin + next)
//   )
//   .subscribe(observer)


/*=====  End of scan  ======*/


/*=============================================
=            buffer            =
=============================================*/
// const { buffer, bufferTime } = Rx.operators;
// // const source = Rx.interval(300);
// // const source2 = Rx.interval(1000);

// // const example = source.pipe(buffer(source2))
// // .subscribe(observer)

// Rx.interval(300)
//   .pipe(
//     bufferTime(1000)
//   )
//   .subscribe(observer)

/*=====  End of buffer  ======*/


/*=============================================
=            bufferCount            =
=============================================*/

// const { bufferCount } = Rx.operators;
// Rx.interval(300)
//   .pipe(
//     bufferCount(3)
//   )
//   .subscribe(observer)

/*=====  End of bufferCount  ======*/


/*=============================================
=            doubleClick            =
=============================================*/

const { bufferTime, filter } = Rx.operators;
const button = document.getElementById('demo');

const click = Rx.fromEvent(button, 'click');

click.pipe(
  bufferTime(1000),
  filter(arr => {
    console.log('filter: ', arr)
    return arr.length >= 2
  })
)
.subscribe(observer)

/*=====  End of doubleClick  ======*/


