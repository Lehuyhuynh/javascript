function findLis(arr) {
  let number = 1;
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] < arr[i + 1]) {
      number += 1;
    }
  }
  return number;
}

appearingfirst(['apple', 'manana', 'crange', 'btermelon'])
module.exports= appearingfirst