module.exports = function reverse (n) {
  (n < 0) ? n = -n : n;
  let str = String(n);
  let arr = str.split('');
  let arrRev = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arrRev.push(arr[i]);
  }
  return +arrRev.join('');
}

