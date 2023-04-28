const appearing= require("./appearing");

test('largest difference between any two elements in the list..', () => {
  const array={}
  const sortedArr = appearing(x,y);
  expect(sortedArr).toEqual(-1);
});
test('largest difference between any two elements in the list..', () => {
  const x = [-2,-3] , y=[-4,-5];
  const sortedArr = appearing(x,y);
  expect(sortedArr).toEqual(-3.5);
});
test('largest difference between any two elements in the list..', () => {
  const x = [3,5],y=[4,0];
  const sortedArr = appearing(x,y);
  expect(sortedArr).toEqual(3.5);
});
test('largest difference between any two elements in the list..', () => {
  const x = [5, -2, 1],y=[ 1, -6];
  const sortedArr = appearing(x,y);
  expect(sortedArr).toEqual(1);
});
test('largest difference between any two elements in the list..', () => {
  const x = [5, 2, -8],y=[ 1, 6];
  const sortedArr = appearing(x,y);
  expect(sortedArr).toEqual(2);
});
