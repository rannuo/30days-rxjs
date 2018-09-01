const observer = {
  next: (value) => { console.log('value:', value); },
  error: (err) => { console.log('Error: ' + err); },
  complete: () => { console.log('complete'); }
}

/* Error handle */


/*=============================================
=            catch            =
=============================================*/

// const { zip, map, catchError, retry } = Rx.operators;

// Rx.from(['a','b','c',2,'d'])
//   .pipe(
//     zip(Rx.interval(500), (x, y) => x),
//     map(x => x.toUpperCase()),

//     catchError(er => Rx.of('err'))
//     // 返回原来的observable重新执行
//     // catchError((err, obs) => obs)
//   )
//   .subscribe(observer)

/*=====  End of catch  ======*/


/*=============================================
=            retryWhen            =
=============================================*/

// const { zip, retryWhen, map, delay, switchMap } = Rx.operators;

// Rx.from(['a','b','c','d',2])
//   .pipe(
//     zip(Rx.interval(300), (x, y) => x),
//     map(x => x.toUpperCase()),
//     retryWhen(errObs => errObs.pipe(switchMap(e => Rx.NEVER)))
//   )
//   .subscribe(observer)


/*=====  End of retryWhen  ======*/



/*=============================================
=            repeat            =
=============================================*/

// const { repeat, zip } = Rx.operators;

// Rx.from(['a', 'b', 'c'])
//   .pipe(
//     zip(Rx.interval(300), (x) => x),
//     repeat(2)
//   )
//   .subscribe(observer)

/*=====  End of repeat  ======*/


/*=============================================
=            实际应用            =
=============================================*/

const title = document.getElementById('title');

const { zip, catchError, concat, startWith, delay, map } = Rx.operators;

Rx.from(['a','b','c','d',2])
  .pipe(
    zip(Rx.interval(300), x => x),
    map(x => x.toUpperCase()),
    catchError((err, obs) => {
      return Rx.empty()
        .pipe(
          startWith('連線發生錯誤： 5秒後重連' + err),
          concat(obs.pipe(delay(5000)))
        )
    })
  )
  .subscribe({
      next: (value) => { title.innerText = value },
      error: (err) => { console.log('Error: ' + err); },
      complete: () => { console.log('complete'); }
  })

/*=====  End of 实际应用  ======*/


