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
  const array = [Online", "35467384993948", "Editor", "for free"];
  const sortedArr =  longestincreasingsubsequence(array);
  expect(sortedArr).toEqual([ '35467384993948', 'for free', 'Editor', 'Online' ]);
});
test(' The longest increasing subsequence is ', () => {
  const array =["33", "35467384993948", 33, "for free"]
  const sortedArr =  longestincreasingsubsequence(array);
  expect(sortedArr).toEqual([ '35467384993948', 'for free', 33, '33' ]);
});
test(' The longest increasing subsequence is ', () => {
  const array = [NaN, "3", 33, "for free"]
  const sortedArr = longestincreasingsubsequence(array);
  expect(sortedArr).toEqual([ NaN, 'for free', 33, '3' ]);
});
