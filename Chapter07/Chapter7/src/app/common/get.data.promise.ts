
function getData() {
  return new Promise((resolve) => resolve('data'));
}

function getMoreData(data) {
  return new Promise((resolve, reject) => resolve('more data'));
}

function getEvenMoreData(data) {
  return new Promise((resolve, reject) => resolve('even more data'));
}

getData()
  .then(getMoreData)
  .then(getEvenMoreData);