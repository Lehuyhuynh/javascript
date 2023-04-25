const alphabetical  = require("./alphabetical");



test('Sorts an array of positive numbers in ascending order', () => {
  const name = ["John Doe", "alex Doe", "peter Doe", "Elon Doe"];
  const sortedArr = s(name);
  expect(sortedArr).toEqual([1, 2, 5, 6, 8]);
});

