const observer = {
  next: (value) => { console.log('value:', value); },
  error: (err) => { console.log('Error: ' + err); },
  complete: () => { console.log('complete'); }
}

/*=============================================
=            debounce            =
=============================================*/

// const { take, debounceTime, map } = Rx.operators;
// const source = Rx.interval(300).pipe(take(5))

// source.pipe(debounceTime(1000))
//   .subscribe(observer)

// const input = document.getElementById('searchInput');
// const requesValue = document.getElementById('theRequestValue');

// Rx.fromEvent(input, 'input')
//   .pipe(
//     debounceTime(300),
//     map(e => e.target.value)
//   )
//   .subscribe(value => requesValue.textContent = value)


/*=====  End of debounce  ======*/


/*=============================================
=            throttle            =
=============================================*/

const { take, throttleTime } = Rx.operators;

Rx.interval(300)
  .pipe(
    take(5),
    throttleTime(1000)
  )
  .subscribe(observer)

/*=====  End of throttle  ======*/



