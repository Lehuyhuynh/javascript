const uniq= require("./uniq");

test(' The longest increasing subsequence is ', () => {
  const myArray=[2,4,6,6,1]
  const sortedArr = uniq(myArray);
  expect(sortedArr).toEqual("2461");
});
test(' The longest increasing subsequence is ', () => {
  const myArray=[2,2,4,6,2,5]
  const sortedArr = uniq(myArray);
  expect(sortedArr).toEqual([ 5, 2, 6, 4, 2, 2 ])
});
test(' The longest increasing subsequence is ', () => {
  const myArray = ["hello",3,"word",];
  const sortedArr = uniq(myArray);
  expect(sortedArr).toEqual( ["word", 3, "hello"]);
});
test(' The longest increasing subsequence is ', () => {
  const myArray =["hello",3,6,3 ]
  const sortedArr = uniq(myArray);
  expect(sortedArr).toEqual([3, 6, 3, "hello"]);
});
test(' The longest increasing subsequence is ', () => {
  const myArray = ["hello", "word", "module"]
  const sortedArr =uniq(myArray);
  expect(sortedArr).toEqual(["module", "word", "hello"]);
});
