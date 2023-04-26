const divisible= require("./divisible");

test('Sorts an array of positive numbers in ascending order', () => {
  const a = [4,6,2,8,5];
  const sortedArr = divisible(a);
  expect(sortedArr).toEqual(undefined);
});
test('Sorts an array of positive numbers in ascending order', () => {
  const a =[22,-3,-4,4,6] ;
  const sortedArr = divisible(a);
  expect(sortedArr).toEqual(undefined);
});
test('Sorts an array of positive numbers in ascending order', () => {
  const a = [-5,-4,-3,-2,-1];
  const sortedArr = divisible(a);
  expect(sortedArr).toEqual(undefined);
});
test('Sorts an array of positive numbers in ascending order', () => {
  const a = [1,4,9,-9,3];
  const sortedArr = divisible(a);
  expect(sortedArr).toEqual(8);
});
test('Sorts an array of positive numbers in ascending order', () => {
  const a =[2,4,7,1,5] ;
  const sortedArr = divisible(a);
  expect(sortedArr).toEqual(undefined);
});