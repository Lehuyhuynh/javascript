const findMedian  = require("./median");

test('The median in the series [5, 6, 50, 1, -5] is', () => {
  const arr = [5, 6, 50, 1, -5];
  const sortedArr = findMedian(arr);
  expect(sortedArr).toEqual(5);
});
test('The median in the series [] is', () => {
  const arr = [3,4,6,8];
  const sortedArr = findMedian(arr);
  expect(sortedArr).toEqual(5);
});
test('The median in the series [] is', () => {
  const arr = [5, 9,-4];
  const sortedArr = findMedian(arr);
  expect(sortedArr).toEqual(5);
});