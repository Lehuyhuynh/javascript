function rearranging the characters (array) {
  let number = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array [i + 1]) {
      number += 1;
    }
  }
  return number;
}

module.exports=longestincreasingsubsequence