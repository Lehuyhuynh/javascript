const findMedian  = require("./median");

test('Sorts an array of positive numbers in ascending order', () => {
  const arr = [5, 6, 50, 1, -5];
  const sortedArr = findMedian(arr);
  expect(sortedArr).toEqual(5);
});
test('Sorts an array of positive numbers in ascending order', () => {
  const arr = [3,4,6,8];
  const sortedArr = findMedian(arr);
  expect(sortedArr).toEqual(5);
});
test('Sorts an array of positive numbers in ascending order', () => {
  const arr = [5, 6,-4];
  const sortedArr = findMedian(arr);
  expect(sortedArr).toEqual(5);
});