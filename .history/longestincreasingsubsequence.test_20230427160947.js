const  longestincreasingsubsequence= require("./longestincreasingsubsequence");

test(' The longest increasing subsequence is ', () => {
  const array=[3, 10, 2, 1, 20]
  const sortedArr =  longestincreasingsubsequence(array);
  expect(sortedArr).toEqual(3);
});
test(' The longest increasing subsequence is ', () => {
  const array=[50, 3, 10, 7, 40, 80 ]
  const sortedArr =  longestincreasingsubsequence(array);
  expect(sortedArr).toEqual(4)
});
test(' The longest increasing subsequence is ', () => {
  const array = [3,2,6,3,73,5];
  const sortedArr =  longestincreasingsubsequence(array);
  expect(sortedArr).toEqual();
});
test(' The longest increasing subsequence is ', () => {
  const array =[-3,-4,5,26,3]
  const sortedArr =  longestincreasingsubsequence(array);
  expect(sortedArr).toEqual();
});
test(' The longest increasing subsequence is ', () => {
  const array = [3,6,2,9]
  const sortedArr = longestincreasingsubsequence(array);
  expect(sortedArr).toEqual([ NaN, 'for free', 33, '3' ]);
});
