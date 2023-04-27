function longestincreasingsubsequence(array) {
  let number = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array [i + 1]) {
      number += 1;
    }
  }
  return number;
}

module.exports=longestincreasingsubsequence