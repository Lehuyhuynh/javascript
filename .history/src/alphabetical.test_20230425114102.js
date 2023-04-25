const alphabetical  = require("./alphabetical");



test('Sorts an array of positive numbers in ascending order', () => {
  const n = [5, 2, 8, 1, 6];
  const sortedArr = sort(arr);
  expect(sortedArr).toEqual([1, 2, 5, 6, 8]);
});

