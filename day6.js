
/*=============================================
=            Observable create                =
=============================================*/




// const source = Rx.of('Jerry', 'Anna');
// const source = Rx.from(['Jerry', 'Anna']);
// const source = Rx.from('Lero');
// const source = Rx.from(new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Helle Rxjs')
//   }, 3000)
// }));
    
// const source = Rx.fromEvent(document.body, 'click')

// source.subscribe({
// 	next: function(value) {
// 		console.log('value: ', value);
// 	},
// 	error: function(error) {
// 		console.log(error)
// 	},
// 	complete: function() {
// 		console.log('complete!')
// 	}
// })


/*=====  End of Observable create  ======*/


/*----------  fromEventPattern  ----------*/


// class Producer {
//   constructor() {
//     this.listeners = [];
//   }

//   addListener(listener) {
//     if(typeof listener === 'function') {
// 			this.listeners.push(listener)
// 		} else {
// 			throw new Error('listener 必須是 function')
// 		}
//   }
//   removeListener(listener) {
// 		this.listeners.splice(this.listeners.indexOf(listener), 1)
// 	}
// 	notify(message) {
// 		this.listeners.forEach(listener => {
// 			listener(message);
// 		})
// 	}
// }

// const egghead = new Producer();

// const source = Rx.fromEventPattern(
//   h => egghead.addListener(h),
//   h => egghead.removeListener(h)
// );

// source.subscribe({
// 	next: function(value) {
// 		console.log('value: ', value);
// 	},
// 	error: function(error) {
// 		console.log(error)
// 	},
// 	complete: function() {
// 		console.log('complete!')
// 	}
// })

// egghead.notify('hello rxjs!')


/*---------- End of fromEventPattern  ----------*/



/*=============================================
=            empty, never, throw            =
=============================================*/

// const source = Rx.empty();
// const source = Rx.NEVER;
// const source = Rx.throwError('lero')

// source.subscribe({
//   next: function(value) {
//       console.log(value)
//   },
//   complete: function() {
//       console.log('complete!');
//   },
//   error: function(error) {
//       console.log('Error: ', error)
//   }
// });

/*=====  End of empty, never, throw  ======*/


/*=============================================
=            timer interval            =
=============================================*/

// const source = Rx.interval(1000)
// const source = Rx.timer(1000)

// source.subscribe({
//   next: function(value) {
//       console.log(value)
//   },
//   complete: function() {
//       console.log('complete!');
//   },
//   error: function(error) {
//       console.log('Error: ', error)
//   }
// });


/*=====  End of timer interval  ======*/



/*=============================================
=            Subscription            =
=============================================*/

const source = Rx.timer(1000, 1000);
// 取得 subscription
const subscription = source.subscribe({
	next: function(value) {
		console.log(value)
	},
	complete: function() {
		console.log('complete!');
	},
	error: function(error) {
    console.log('Throw Error: ' + error)
	}
});

setTimeout(() => {
    subscription.unsubscribe() // 停止訂閱(退訂)， RxJS 4.x 以前的版本用 dispose()
}, 5000);

/*=====  End of Subscription  ======*/


