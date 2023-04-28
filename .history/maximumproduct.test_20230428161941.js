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
  const myArray = [50, 3, 10, 7, 40, 80 ]
  const sortedArr = maximumproduct(myArray);
  expect(sortedArr).toEqual( 160000);
});
test(' loại bỏ tất cả khoảng trắng đầu và cuối và khoảng trắng ở giũa chỉ để lai 1 khonagr trắng ', () => {
  const myArray =[3, 10, 2, 1, 20]
  const sortedArr = maximumproduct(myArray);
  expect(sortedArr).toEqual( 600);
});
test(' loại bỏ tất cả khoảng trắng đầu và cuối và khoảng trắng ở giũa chỉ để lai 1 khonagr trắng ', () => {
  const myArray =  [70, 11, 20, 4, 100]
  const sortedArr =maximumproduct(myArray);
  expect(sortedArr).toEqual(140000);
});
