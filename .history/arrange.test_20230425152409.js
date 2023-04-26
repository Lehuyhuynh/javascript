const arrange = require("./arrange");

test('Sorts an array of positive numbers in ascending order', () => {
  const arr = [5, 2, 8, 1, 6];
  const sortedArr = arrange(arr);
  expect(sortedArr).toEqual([1, 2, 5, 6, 8]);
});

test('Sorts an array of positive numbers in ascending order', () => {
  const arr = [-5, 2, -8, 1, 6];
  const sortedArr = arrange(arr);
  expect(sortedArr).toEqual([-8,-5,1, 2, 6]);
});
test('Sorts an array of positive numbers in ascending order', () => {
  const arr = [9,3,6,1];
  const sortedArr = arrange(arr);
  expect(sortedArr).toEqual([1,3,6,9]);
});
test('Sorts an array of positive numbers in ascending order', () => {
  const arr = [1,4,7,6];
  const sortedArr = arrange(arr);
  expect(sortedArr).toEqual([1,4,7,6]);
});
test('Sorts an array of positive numbers in ascending order', () => {
  const arr = [4,2,7,2];
  const sortedArr = arrange(arr);
  expect(sortedArr).toEqual([2,2,4,7]);
});


