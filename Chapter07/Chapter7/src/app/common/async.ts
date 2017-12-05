class Async {
  constructor() {
    this.asynchronousOperation(this.notifyCompletion);
    this.getData().then((data) => console.log('Data', data)) // 42
  }

  notifyCompletion() {
    console.log('Our asynchronous operation has been completed');
  }

  asynchronousOperation(callback) {
    setTimeout(function () {
      callback();
    }, 5000);
  }

  getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve(42); }, 3000)
    })
  }
}


