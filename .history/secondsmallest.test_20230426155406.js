const secondsmallest= require("./secondsmallest");

test('Sorts an array of positive numbers in ascending order', () => {
  const arr_num = [3,-5,4,-9];
  const sortedArr = secondsmallest(arr_num);
  expect(sortedArr).toEqual([-5]);
});
test('Sorts an array of positive numbers in ascending order', () => {
  const arr_num = [-2,-3,-4,-5];
  const sortedArr = secondsmallest(arr_num);
  expect(sortedArr).toEqual([-4]);
});
test('Sorts an array of positive numbers in ascending order', () => {
  const arr_num = [3,5,4,0,0];
  const sortedArr = secondsmallest(arr_num);
  expect(sortedArr).toEqual([3]);
});
test('Sorts an array of positive numbers in ascending order', () => {
  const arr_num = [5, -2, 1, 1, -6];
  const sortedArr = econdsmallest(arr_num);
  expect(sortedArr).toEqual([-2]);
});
test('Sorts an array of positive numbers in ascending order', () => {
  const arr_num = [5, 2, -8, 1, 6];
  const sortedArr = econdsmallest(arr_num);
  expect(sortedArr).toEqual([2]);
});
