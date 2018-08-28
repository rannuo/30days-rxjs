const observable = new Rx.Observable(function(observer) {
  observer.next('Jerry');
  observer.next('Anna');
  throw 'some exception';
});

const observer = {
	next: function(value) {
		console.log(value);
	},
	error: function(error) {
		console.log(error)
	},
	complete: function() {
		console.log('complete')
	}
}


observable.subscribe(observer)
