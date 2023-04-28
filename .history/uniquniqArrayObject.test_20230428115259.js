const uniqArrayObject= require("./uniqArrayObjectArrayObject");

test(' The longest increasing subsequence is ', () => {
  const myArray=[2,4,6,6,1]
  const sortedArr = uniqArrayObject(myArray);
  expect(sortedArr).toEqual("2461");
});
test(' The longest increasing subsequence is ', () => {
  const myArray=[2,2,4,6,2,5]
  const sortedArr = uniqArrayObject(myArray);
  expect(sortedArr).toEqual( "2465")
});
test(' The longest increasing subsequence is ', () => {
  const myArray = ["hello",3,"word","hello"];
  const sortedArr = uniqArrayObject(myArray);
  expect(sortedArr).toEqual( "hello3word");
});
test(' The longest increasing subsequence is ', () => {
  const myArray =["hello",3,6,3 ]
  const sortedArr = uniqArrayObject(myArray);
  expect(sortedArr).toEqual("hello36");
});
test(' The longest increasing subsequence is ', () => {
  const myArray = ["hello", "word", "module","hello"]
  const sortedArr =uniqArrayObject(myArray);
  expect(sortedArr).toEqual("hellowordmodule");
});
