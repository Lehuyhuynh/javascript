const understanding= require("./understanding");

test('returns the second smallest number in the list.', () => {
  const arr_num = [3,-5,4,-9];
  const sortedArr = secondsmallest(arr_num);
  expect(sortedArr).toEqual([-5]);
});
test('returns the second smallest number in the list.', () => {
  const arr_num = [-2,-3,-4,-5];
  const sortedArr = secondsmallest(arr_num);
  expect(sortedArr).toEqual([-4]);
});
test('returns the second smallest number in the list.', () => {
  const arr_num = [3,5,4,0,0];
  const sortedArr = secondsmallest(arr_num);
  expect(sortedArr).toEqual([3]);
});
test('returns the second smallest number in the list.', () => {
  const arr_num = [5, -2, 1, 1, -6];
  const sortedArr = secondsmallest(arr_num);
  expect(sortedArr).toEqual([-2]);
});
test('returns the second smallest number in the list.', () => {
  const arr_num = [5, 2, -8, 1, 6];
  const sortedArr = secondsmallest(arr_num);
  expect(sortedArr).toEqual([1]);
});
