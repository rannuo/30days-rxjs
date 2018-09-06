var observerA = {
  next: value => console.log('A next: ' + value),
  error: error => console.log('A error: ' + error),
  complete: () => console.log('A complete!')
}

var observerB = {
  next: value => console.log('B next: ' + value),
  error: error => console.log('B error: ' + error),
  complete: () => console.log('B complete!')
}


/*=============================================
=            multicast            =
=============================================*/

const { take, multicast, refCount,publish, share } = Rx.operators;
const source = Rx.interval(1000)
  .pipe(
    take(3),
    // multicast(new Rx.Subject()),
    // publish(),
    // refCount()
    share()
  )


source.subscribe(observerA); // subject.subscribe(observerA)

// source.connect();
// source.subscribe(subject)

setTimeout(() => {
    source.subscribe(observerB); // subject.subscribe(observerB)
}, 1000);
/*=====  End of multicast  ======*/

