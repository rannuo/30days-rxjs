// var handler = (e) => {
// 	console.log(e);
// 	// document.body.removeEventListener('click', handler); // 結束監聽
// }

// // 註冊監聽
// document.body.addEventListener('click', handler);

const { take } = Rx.operators;
Rx.fromEvent(document, 'click')
  .pipe(
    take(1)
  )
  .subscribe(console.log)