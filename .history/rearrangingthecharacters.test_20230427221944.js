const  chunkArray= require("./rearrangingthecharacters");

test(' The longest increasing subsequence is ', () => {
  const array=[
    
  ]
  const sortedArr =  chunkArray();
  expect(sortedArr).toEqual('AmanaplanacanalPanama');
});
// test(' The longest increasing subsequence is ', () => {
//   const array=[50, 3, 10, 7, 40, 80 ]
//   const sortedArr =  rearrangingthecharacters(array);
//   expect(sortedArr).toEqual(4)
// });
// test(' The longest increasing subsequence is ', () => {
//   const array = [3,2,6,3,7,8,5];
//   const sortedArr =  rearrangingthecharacters(array);
//   expect(sortedArr).toEqual(4);
// });
// test(' The longest increasing subsequence is ', () => {
//   const array =[-3,-4,5,26,3]
//   const sortedArr =  rearrangingthecharacters(array);
//   expect(sortedArr).toEqual(3);
// });
// test(' The longest increasing subsequence is ', () => {
//   const array = [3,6,2,9]
//   const sortedArr = rearrangingthecharacters(array);
//   expect(sortedArr).toEqual(3);
// });
