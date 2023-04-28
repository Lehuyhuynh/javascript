const maximumproduct= require("./maximumproduct");

test(' loại bỏ tất cả khoảng trắng đầu và cuối và khoảng trắng ở giũa chỉ để lai 1 khonagr trắng ', () => {
  const myArray=[-4,2,-6,8,3]
  const sortedArr = maximumproduct(myArray);
  expect(sortedArr).toEqual( 192);
});
test(' loại bỏ tất cả khoảng trắng đầu và cuối và khoảng trắng ở giũa chỉ để lai 1 khonagr trắng ', () => {
  const myArray=[-10, -5, 0, 1, 2, 3, 4]
  const sortedArr = maximumproduct(myArray);
  expect(sortedArr).toEqual(200)
});
test(' loại bỏ tất cả khoảng trắng đầu và cuối và khoảng trắng ở giũa chỉ để lai 1 khonagr trắng ', () => {
  const myArray = "hello       3       word"
  const sortedArr = maximumproduct(myArray);
  expect(sortedArr).toEqual( "hello 3 word");
});
test(' loại bỏ tất cả khoảng trắng đầu và cuối và khoảng trắng ở giũa chỉ để lai 1 khonagr trắng ', () => {
  const myArray ="3     con gà     , 4 con vịt"
  const sortedArr = maximumproduct(myArray);
  expect(sortedArr).toEqual("3 con gà , 4 con vịt");
});
test(' loại bỏ tất cả khoảng trắng đầu và cuối và khoảng trắng ở giũa chỉ để lai 1 khonagr trắng ', () => {
  const myArray = "   chào tất   cả    anh em"
  const sortedArr =maximumproduct(myArray);
  expect(sortedArr).toEqual("chào tất cả anh em");
});
