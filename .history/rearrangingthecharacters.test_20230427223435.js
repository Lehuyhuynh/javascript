const  chunkArray= require("./rearrangingthecharacters");

test(' The longest increasing subsequence is ', () => {
  const m=[2,5,2,8,3,7,4]
  const sortedArr =  chunkArray(array,3);
  expect(sortedArr).toEqual([ [1,2,3] , [4,5,6] ,[7,8] ]);
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
