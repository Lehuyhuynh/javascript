const divisible= require("./divisible");

test('Sorts an array of positive numbers in ascending order', () => {
  const a = [4,6,2,8,5];
  const sortedArr = divisible(a);
  expect(sortedArr).toEqual();
});
test('Sorts an array of positive numbers in ascending order', () => {
  const a = ("that takes a list of aings as ");
  const sortedArr = divisible(a);
  expect(sortedArr).toEqual("aings");
});
test('Sorts an array of positive numbers in ascending order', () => {
  const a = ("input and returns");
  const sortedArr = divisible(a);
  expect(sortedArr).toEqual("returns");
});
test('Sorts an array of positive numbers in ascending order', () => {
  const a =("the longest word in the list.") ;
  const sortedArr = divisible(a);
  expect(sortedArr).toEqual("longest");
});
test('Sorts an array of positive numbers in ascending order', () => {
  const a = ("Sorts an array of positive numbers in ascending order 3456789101111");
  const sortedArr = divisible(a);
  expect(sortedArr).toEqual("ascending");
});