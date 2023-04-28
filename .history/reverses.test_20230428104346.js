const reverses= require("./reverses");

test(' The longest increasing subsequence is ', () => {
  const myArray=[2,4,6,1]
  const sortedArr = reverses(myArray);
  expect(sortedArr).toEqual([ 1, 6, 4, 2 ]);
});
test(' The longest increasing subsequence is ', () => {
  const myArray=[2,2,4,6,2,5]
  const sortedArr = reverses(myArray);
  expect(sortedArr).toEqual([ 5, 2, 6, 4, 2, 2 ])
});
test(' The longest increasing subsequence is ', () => {
  const myArray = ["hello"];
  const sortedArr = reverses(myArray);
  expect(sortedArr).toEqual();
});
test(' The longest increasing subsequence is ', () => {
  const myArray =["hello",3,6,3 ]
  const sortedArr = reverses(myArray);
  expect(sortedArr).toEqual();
});
test(' The longest increasing subsequence is ', () => {
  const myArray = ["hello", "word"]
  const sortedArr =reverses(myArray);
  expect(sortedArr).toEqual();
});
