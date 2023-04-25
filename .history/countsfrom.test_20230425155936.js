const countsfrom  = require("./countsfrom");

test('The median in the series [5, 6, 50, 1, -5] is 5' , () => {
  const arr = "The, quick brown fox jumps over the lazy dog.";
  const sortedArr = co(arr);
  expect(sortedArr).toEqual(9);
});
test('The median in the series [3,4,6,8] is 5', () => {
  const arr = [3,4,6,8];
  const sortedArr = findMedian(arr);
  expect(sortedArr).toEqual(5);
});
test('The median in the series [-5, 9,-4] is -5'  , () => {
  const arr = [-5, 9,-4];
  const sortedArr = findMedian(arr);
  expect(sortedArr).toEqual(-4);
});
test('The median in the series [-5, 9,-4,9] is -6'  , () => {
  const arr = [6,-5,-4,8];
  const sortedArr = findMedian(arr);
  expect(sortedArr).toEqual(1);
});
