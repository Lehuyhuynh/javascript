const alphabetical  = require("./");



test('Sorts an array of positive numbers in ascending order', () => {
  const arr = [5, 2, 8, 1, 6];
  const sortedArr = sort(arr);
  expect(sortedArr).toEqual([1, 2, 5, 6, 8]);
});

