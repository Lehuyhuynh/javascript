const alphabetical  = require("./alphabetical");



test('Sorts an array of positive numbers in ascending order', () => {
  const name = ["John Doe", "Alex Doe", "peter Doe", "Elon Doe"];
  const sortedArr = alphabetical(name);
  expect(sortedArr).toEqual(["Alex Doe","Elon Doe","John Doe","Peter Doe"]);
});

