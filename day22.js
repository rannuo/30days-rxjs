export const observer = {
  next: (value) => { console.log('value:', value); },
  error: (err) => { console.log('Error: ' + err); },
  complete: () => { console.log('complete'); }
}

const { take } = Rx.operators;
const source = Rx.interval(1000).pipe(take(3))

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

// source.subscribe(observerA)
// // source.subscribe(observerB)

// setTimeout(() => {
//   source.subscribe(observerB)
// }, 1000)

// var subject = {
//   observers: [],
//   subscribe: function(observer) {
//       this.observers.push(observer)
//   },
//   next: function(value) {
//       this.observers.forEach(o => o.next(value))    
//   },
//   error: function(error){
//       this.observers.forEach(o => o.error(error))
//   },
//   complete: function() {
//       this.observers.forEach(o => o.complete())
//   }
// }

var subject = new Rx.Subject()

subject.subscribe(observerA);

source.subscribe(subject);

setTimeout(() => {
  subject.subscribe(observerB);
}, 1000);