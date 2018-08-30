const observer = {
  next: (value) => { console.log('value:', value); },
  error: (err) => { console.log('Error: ' + err); },
  complete: () => { console.log('complete'); }
}
/*=============================================
=            delay            =
=============================================*/

// const { take } = Rx.operators;

// Rx.interval(300).pipe(take(5))
//   .subscribe(observer)

/*=====  End of delay  ======*/


/*=============================================
=            delayWhen            =
=============================================*/

// const { take, delayWhen } = Rx.operators;

// Rx.interval(300)
//   .pipe(
//     take(5),
//     delayWhen(x => Rx.interval(1000*x*x))
//   )
//   .subscribe(observer)

/*=====  End of delayWhen  ======*/



/*=============================================
=            头像动画            =
=============================================*/
// const { map, delayWhen, delay } = Rx.operators;
// const imgList = document.getElementsByTagName('img');

// const movePos = Rx.fromEvent(document, 'mousemove')
//   .pipe(
//     map(e => ({x: e.clientX, y: e.clientY}))
//   )

// const delayTime = 20;

// Array.from(imgList).forEach((img, index) => {
//   movePos
//   .pipe(
//     // delay(delayTime * (Math.pow(0.65, index) + Math.cos(index / 4)) / 2),
//     delay(delayTime * index * index),
//   )
//   .subscribe(pos => {
//     img.style.transform = 'translate3d(' + pos.x + 'px, ' + pos.y + 'px, 0)';
//   })
// })

/*=====  End of 头像动画  ======*/


