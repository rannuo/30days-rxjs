const observer = {
  next: (value) => { console.log('value:', value); },
  error: (err) => { console.log('Error: ' + err); },
  complete: () => { console.log('complete'); }
}


/*=============================================
=            concatAll            =
=============================================*/
// const { map, concatAll, take} = Rx.operators;

// const click = Rx.fromEvent(document.body, 'click');

// // const source = click.pipe(map(e => Rx.interval(1000)))
// const source = click.pipe(map(e => Rx.interval(1000).pipe(take(3))))

// source.pipe(
//   concatAll()
// )
// .subscribe(observer)

/*=====  End of concatAll  ======*/


/*=============================================
=            switch            =
=============================================*/

// const { map, switchAll, take} = Rx.operators;

// const click = Rx.fromEvent(document.body, 'click');

// const source = click.pipe(map(e => Rx.interval(1000)))

// source.pipe(
//   switchAll()
// )
// .subscribe(observer)


/*=====  End of switch  ======*/


/*=============================================
=            mergeAll            =
=============================================*/

const { map, mergeAll, take} = Rx.operators;

const click = Rx.fromEvent(document.body, 'click');

const source = click.pipe(map(e => Rx.interval(1000)))

source.pipe(
  mergeAll(2)
)
.subscribe(observer)

/*=====  End of mergeAll  ======*/

