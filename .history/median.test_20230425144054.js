const findMedian  = require("./median");

test('Sorts an array of positive numbers in ascending order', () => {
  const arr = [5, 6, 50, 1, -5];
  const sortedArr = f(arr);
  expect(sortedArr).toEqual(5);
});
test('Sorts an array of positive numbers in ascending order', () => {
  const arr = [3,4,6,8];
  const sortedArr = median(arr);
  expect(sortedArr).toEqual(5);
});
