const findMedian2= require("./findMedian2");

test('largest difference between any two elements in the list..', () => {
  const x = [3,-5] ,y=;
  const sortedArr = findMedian2(arr_num);
  expect(sortedArr).toEqual(13);
});
test('largest difference between any two elements in the list..', () => {
  const arr_num = [-2,-3,-4,-5];
  const sortedArr = findMedian2(arr_num);
  expect(sortedArr).toEqual(3);
});
test('largest difference between any two elements in the list..', () => {
  const arr_num = [3,5,4,0];
  const sortedArr = findMedian2(arr_num);
  expect(sortedArr).toEqual(5);
});
test('largest difference between any two elements in the list..', () => {
  const arr_num = [5, -2, 1, 1, -6];
  const sortedArr = findMedian2(arr_num);
  expect(sortedArr).toEqual(11);
});
test('largest difference between any two elements in the list..', () => {
  const arr_num = [5, 2, -8, 1, 6];
  const sortedArr = findMedian2(arr_num);
  expect(sortedArr).toEqual(14);
});
