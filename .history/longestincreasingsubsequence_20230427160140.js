function longestincreasingsubsequence(array) {
  let number = 1;
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array [i + 1]) {
      number += 1;
    }
  }
  return number;
}

appearingfirst(['apple', 'manana', 'crange', 'btermelon'])
module.exports=longestincreasingsubsequence