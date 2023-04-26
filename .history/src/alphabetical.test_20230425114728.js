const alphabetical  = require("./alphabetical");



test('Sorts an array of positive numbers in ascending order', () => {
  const name = ["John Doe", "Alex Doe", "Peter Doe", "Elon Doe"];
  const sortedArr = alphabetical(name);
  expect(sortedArr).toEqual(["Alex Doe","Elon Doe","John Doe","Peter Doe"]);
});




test('Sorts an array of positive numbers in ascending order', () => {
  const name = [5, "Alex Doe", 2, "Elon Doe"];
  const sortedArr = alphabetical(name);
  expect(sortedArr).toEqual([2,5,"Alex Doe","Elon Doe"]);
});

test('Sorts an array of positive numbers in ascending order', () => {
  const name = ["2", "4", 1, "Elon Doe"];
  const sortedArr = alphabetical(name);
  expect(sortedArr).toEqual([1,"Elon Doe","2","4"]);
});
test('Sorts an array of positive numbers in ascending order', () => {
  const name = ["John Doe", "Alex Doe", 2, "Elon Doe"];
  const sortedArr = alphabetical(name);
  expect(sortedArr).toEqual([2,"Alex Doe","Elon Doe","John Doe"]);
});
test('Sorts an array of positive numbers in ascending order', () => {
  const name = ["John Doe", "Alex Doe", 2, "Elon Doe"];
  const sortedArr = alphabetical(name);
  expect(sortedArr).toEqual([2,"Alex Doe","Elon Doe","John Doe"]);
});

