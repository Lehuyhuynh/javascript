const median  = require("./median");

test('Sorts an array of positive numbers in ascending order', () => {
  const values = [5, 6, 50, 1, -5];
  const sortedArr = median(values);
  expect(sortedArr).toEqual(5);
});
test('Sorts an array of positive numbers in ascending order', () => {
  const values = [3,4,6,];
  const sortedArr = median(values);
  expect(sortedArr).toEqual(5);
});
