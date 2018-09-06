
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
=            Subject            =
=============================================*/

// const subject = new Rx.Subject();

// subject.subscribe(observerA);

// subject.next(1);

// subject.next(2);

// subject.next(3);

// setTimeout(() => {
//   subject.subscribe(observerB); // 3 秒後才訂閱，observerB 不會收到任何值。
// },3000)

/*=====  End of Subject  ======*/



/*=============================================
=            BehaviorSubject            =
=============================================*/

var subject = new Rx.BehaviorSubject(0);

subject.subscribe(observerA);
// "A next: 0"
subject.next(1);
// "A next: 1"
subject.next(2);
// "A next: 2"
subject.next(3);
// "A next: 3"

subject.complete()

setTimeout(() => {
    subject.subscribe(observerB); 
    // "B next: 3"
},3000)
/*=====  End of BehaviorSubject  ======*/


/*=============================================
=            ReplaySubject            =
=============================================*/

// var subject = new Rx.ReplaySubject(2);

// subject.subscribe(observerA);
// subject.next(1);
// // "A next: 1"
// subject.next(2);
// // "A next: 2"
// subject.next(3);
// // "A next: 3"

// setTimeout(() => {
//     subject.subscribe(observerB);
//     // "B next: 2"
//     // "B next: 3"
// },3000)

/*=====  End of ReplaySubject  ======*/


/*=============================================
=            AsyncSubject            =
=============================================*/

// var subject = new Rx.AsyncSubject();

// subject.subscribe(observerA);
// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.complete();
// // "A next: 3"
// // "A complete!"

// setTimeout(() => {
//     subject.subscribe(observerB);
//     // "B next: 3"
//     // "B complete!"
// },3000)

/*=====  End of AsyncSubject  ======*/

