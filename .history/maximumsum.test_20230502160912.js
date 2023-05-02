const subsequence = require("./subsequence ");

test('Sorts an array of positive numbers in ascending order', () => {
  const str = ('Write a program ');
  const sortedArr = subsequence (str);
  expect(sortedArr).toEqual("program");
});
test('Sorts an array of positive numbers in ascending order', () => {
  const str = ("that takes a list of strings as ");
  const sortedArr = subsequence (str);
  expect(sortedArr).toEqual("strings");
});
test('Sorts an array of positive numbers in ascending order', () => {
  const str = ("input and returns");
  const sortedArr = subsequence (str);
  expect(sortedArr).toEqual("returns");
});
test('Sorts an array of positive numbers in ascending order', () => {
  const s1 ="";
  const s2="";
  const sortedArr = subsequence (s1,s2);
  expect(sortedArr).toEqual("");
});
test('Sorts an array of positive numbers in ascending order', () => {
  const str = ("Sorts an array of positive numbers in ascending order 3456789101111");
  const sortedArr = subsequence (str);
  expect(sortedArr).toEqual("ascending");
});