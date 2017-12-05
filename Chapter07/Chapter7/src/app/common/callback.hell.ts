class CallbackHell {
  constructor() {
    this.getData(function (data) {
      this.getMoreData(data, function (moreData) {
        this.getEvenMoreData(moreData, function (evenMoreData) {
          // done here
        });
      });
    });
  }

  getData(fn) {
    setTimeout(() => {
      fn('data');
    }, 2000);
  }

  getMoreData(input, fn) {
    setTimeout(() => {
      fn('more data');
    }, 2000);
  }

  getEvenMoreData(input, fn) {
    setTimeout(() => {
      fn('even more data');
    }, 2000);
  }
}





