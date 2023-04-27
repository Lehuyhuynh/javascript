const subsequence= require("./subsequence");

test('largest difference between any two elements in the list..', () => {
  const arr_num = [3,-5,4,-9];
  const sortedArr = subsequence(arr_num);
  expect(sortedArr).toEqual(13);
});
test('largest difference between any two elements in the list..', () => {
  const arr_num = [-2,-3,-4,-5];
  const sortedArr = subsequence(arr_num);
  expect(sortedArr).toEqual(3);
});
test('largest difference between any two elements in the list..', () => {
  const arr_num = [3,5,4,0];
  const sortedArr = subsequence(arr_num);
  expect(sortedArr).toEqual(5);
});
test('largest difference between any two elements in the list..', () => {
  const arr_num = [5, -2, 1, 1, -6];
  const sortedArr = subsequence(arr_num);
  expect(sortedArr).toEqual(11);
});
test('largest difference between any two elements in the list..', () => {
  const arr_num = [5, 2, -8, 1, 6];
  const sortedArr = subsequence(arr_num);
  expect(sortedArr).toEqual(14);
});
