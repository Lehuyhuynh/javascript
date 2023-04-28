const  longestincreasingsubsequence= require("./longestincreasingsubsequence");

test(' The longest increasing subsequence is ', () => {
  const array=[]
  const sortedArr =  longestincreasingsubsequence(array);
  expect(sortedArr).toEqual([ 'btermelon', 'manana', 'crange', 'apple' ]);
});
test(' The longest increasing subsequence is ', () => {
  const array=["largest" ,"difference" ,"between" ,"any two", "elements", "in the list"]
  const sortedArr =  longestincreasingsubsequence(array);
  expect(sortedArr).toEqual([
    'in the list',
    'difference',
    'elements',
    'any two',
    'between',
    'largest'
  ])
});
test(' The longest increasing subsequence is ', () => {
  const array = ["Online", "35467384993948", "Editor", "for free"];
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
