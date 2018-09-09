
/* 实现 Observable  */

// function create(subscriber) {
//   const observable = {
//     subscribe(observer) {
//       subscriber(observer)
//     }
//   }
//   return observable;
// }

// const observable = create(function(observer) {
//   observer.next(1)
//   observer.next(2)
//   observer.next(3)
// })
// const observer = {
//   next(value) {
//     console.log('value: ', value)
//   }
// }

// observable.subscribe(observer)

// 預設空的 observer 
const emptyObserver = {
  next: () => { },
  error: (err) => { throw err; },
  complete: () => { }
}


class Observer {
  constructor(destinationOrNext, error, complete) {
    switch (arguments.length) {
      case 0:
        // 空的 observer
        this.destination = this.safeObserver(emptyObserver);
        break;
      case 1:
        if (!destinationOrNext) {
          // 空的 observer
          this.destination = this.safeObserver(emptyObserver);
          break;
        }
        // 多一個判斷，是否傳入的 destinationOrNext 原本就是 Observer 的實例，如果是就不用在用執行 `this.safeObserver`
        if(destinationOrNext instanceof Observer){
          this.destination = destinationOrNext;
          break;
        }
        if (typeof destinationOrNext === 'object') {
          // 傳入了 observer 物件
          this.destination = this.safeObserver(destinationOrNext);
          break;
        }
      default:
        // 如果上面都不是，代表應該是傳入了一到三個 function
        this.destination = this.safeObserver(destinationOrNext, error, complete);
        break;
    }
  }

  safeObserver(observerOrNext, error, complete) {
    let next;

    if (typeof (observerOrNext) === 'function') {
      // observerOrNext 是 next function
      next = observerOrNext;
    } else if (observerOrNext) {
      // observerOrNext 是 observer 物件
      next = observerOrNext.next || () => { };
      error = observerOrNext.error || function (err) {
        throw err
      };
      complete = observerOrNext.complete || () => { };
    }
    // 最後回傳我們預期的 observer 物件
    return {
      next: next,
      error: error,
      complete: complete
    };
  }

  next(value) {
    if (!this.isStopped) {
      try {
        this.destination.next(value)
      } catch (error) {
        this.unsubscribe();
        throw error;
      }
    }
  }

  error(err) {
    if (!this.isStopped) {
      // 先判斷是否停止過
      try {
        this.destination.error(err); // 傳送錯誤
      } catch (anotherError) {
        this.unsubscribe();
        throw anotherError;
      }
      this.unsubscribe();
    }
  }
  complete() {
    if (!this.isStopped && this.complete) {
      // 先判斷是否停止過
      try {
        this.destination.complete(); // 發送停止訊息
      } catch (err) {
        this.unsubscribe();
        throw err;
      }
      this.unsubscribe(); // 發送停止訊息後退訂
    }
  }
  unsubscribe() {
    this.isStopped = true;
  }
}

class Observable {
  constructor(subscribe) {
    if(subscribe) {
      this._subscribe = subscribe; // 把 subscribe 存到 _subscribe 屬性中
    }
  }
  subscribe() {
    const observer = new Observer(...arguments);
     // 先做某個判斷是否當前的 observable 是具有 operator 的
     if(this.operator) {
      // 用 operator 的操作
      this.operator.call(observer, this.source)
    } else {
      // 如果沒有 operator 再直接把 observer 丟給 _subscribe
      this._subscribe(observer);
    }
    return observer;
  }
  static create(subscribe) {
    return new Observable(subscribe);
  }

  static fromArray(array) {
    if(!Array.isArray(array)) {
        // 如果傳入的參數不是陣列，則拋出例外
        throw new Error('params need to be an array');
    }
    return new Observable(function(observer) {
        try{
            // 遍歷每個元素並送出
            array.forEach(value => observer.next(value))
            observer.complete()
        } catch(err) {
            observer.error(err)
        }
    });
  }

  map(callback) {
    const observable = new Observable();

    observable.source = this;
    observable.operator = {
      call: (observer, source) => { // 執行這個 operator 的行為 }
        const newObserver = new MapObserver(observer, callback);
        // 建立包裹後的 observer
        // 訂閱原本的資料源，並回傳
        return source.subscribe(newObserver);
      }
    }; // 儲存當前 operator 行為，並作為是否有 operator 的依據，
    
    return observable; // 返回這個新的 observable
  }
}


class MapObserver extends Observer {
  constructor(observer, callback) {
    // 這裡會傳入原本的 observer 跟 map 的 callback
    super(observer); // 因為有繼承所以要先執行一次父層的建構式
    this.callback = callback; // 保存 callback
    this.next = this.next.bind(this); // 確保 next 的 this
  }
  next(value) {
    try {
      this.destination.next(this.callback(value)); 
      // this.destination 是父層 Observer 保存的 observer 物件
      // 這裡 this.callback(value) 就是 map 的操作
    } catch (err) {
      this.destination.error(err);
      return;
    }
  }
}

// function create(subscriber) {
//   const observable = {
//       subscribe: function(observerOrNext, error, complete) {
//           const realObserver = new Observer(observerOrNext, error, complete)
//           subscriber(realObserver);
//           return realObserver;
//       }       
//   };
//   return observable;
// }
