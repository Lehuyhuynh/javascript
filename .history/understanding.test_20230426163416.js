const understanding= require("./understanding");

test('largest difference between any two elements in the list..', () => {
  const arr_num = [3,-5,4,-9];
  const sortedArr = understanding(arr_num);
  expect(sortedArr).toEqual([-]);
});
test('largest difference between any two elements in the list..', () => {
  const arr_num = [-2,-3,-4,-5];
  const sortedArr = understanding(arr_num);
  expect(sortedArr).toEqual([-4]);
});
test('largest difference between any two elements in the list..', () => {
  const arr_num = [3,5,4,0,0];
  const sortedArr = understanding(arr_num);
  expect(sortedArr).toEqual([3]);
});
test('largest difference between any two elements in the list..', () => {
  const arr_num = [5, -2, 1, 1, -6];
  const sortedArr = understanding(arr_num);
  expect(sortedArr).toEqual([-2]);
});
test('largest difference between any two elements in the list..', () => {
  const arr_num = [5, 2, -8, 1, 6];
  const sortedArr = understanding(arr_num);
  expect(sortedArr).toEqual([1]);
});
