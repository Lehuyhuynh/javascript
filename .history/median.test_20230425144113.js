const findMedian  = require("./median");

test('Sorts an array of positive numbers in ascending order', () => {
  const arr = [5, 6, 50, 1, -5];
  const sortedArr = findMedian(arr);
  expect(sortedArr).toEqual(5);
});
test('Sorts an array of positive numbers in ascending order', () => {
  const arr = [3,4,6,8];
  const sortedArr = function findMedian(arr) {
  let newArr = arr.sort((a, b) => a - b);
  let n = newArr.length;
  let median;
  if (n % 2 === 0) {
    let m = n / 2;
    median = (newArr[m - 1] + newArr[m]) / 2;
  } else {
    let m = Math.floor(n / 2);
    median = newArr[m];
  }
  return median;
}(arr);
  expect(sortedArr).toEqual(5);
});
