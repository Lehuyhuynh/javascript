const alphabetical  = require("./alphabetical");



test('Sorts an array of positive numbers in ascending order', () => {
  const name = [5];
  const sortedArr = sort(arr);
  expect(sortedArr).toEqual([1, 2, 5, 6, 8]);
});

