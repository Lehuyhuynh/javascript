const findMedian2= require("./findMedian2");

test('largest difference between any two elements in the list..', () => {
  const x = [3,-5] ,y=[4,-9];
  const sortedArr = findMedian2(x,y);
  expect(sortedArr).toEqual(-1);
});
test('largest difference between any two elements in the list..', () => {
  const x = [-2,-3] , y=[-4,-5];
  const sortedArr = findMedian2(x,y);
  expect(sortedArr).toEqual(-3.5);
});
test('largest difference between any two elements in the list..', () => {
  const x = [3,5],y=[4,0];
  const sortedArr = findMedian2(x,y);
  expect(sortedArr).toEqual(3);
});
test('largest difference between any two elements in the list..', () => {
  const x = [5, -2, 1],y=[ 1, -6];
  const sortedArr = findMedian2(x,y);
  expect(sortedArr).toEqual(11);
});
test('largest difference between any two elements in the list..', () => {
  const x = [5, 2, -8],y=[ 1, 6];
  const sortedArr = findMedian2(x,y);
  expect(sortedArr).toEqual(14);
});
