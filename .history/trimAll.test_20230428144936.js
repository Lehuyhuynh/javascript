const MapKey= require("./MapKey");

test(' loại bỏ tất cả khoảng trắng đầu và cuối và khoảng trắng ở giũa chỉ để lai 1 khonagr trắng ', () => {
  const myArray="   hello    word     "
  const sortedArr = MapKey(myArray);
  expect(sortedArr).toEqual( "hello word");
});
test(' loại bỏ tất cả khoảng trắng đầu và cuối và khoảng trắng ở giũa chỉ để lai 1 khonagr trắng ', () => {
  const myArray='    I    am    good     ' 
  const sortedArr = MapKey(myArray);
  expect(sortedArr).toEqual("I am good")
});
test(' loại bỏ tất cả khoảng trắng đầu và cuối và khoảng trắng ở giũa chỉ để lai 1 khonagr trắng ', () => {
  const myArray = "hello       3       word"
  const sortedArr = MapKey(myArray);
  expect(sortedArr).toEqual( "hello 3 word");
});
test(' loại bỏ tất cả khoảng trắng đầu và cuối và khoảng trắng ở giũa chỉ để lai 1 khonagr trắng ', () => {
  const myArray ="3     con gà     , 4 con vịt"
  const sortedArr = MapKey(myArray);
  expect(sortedArr).toEqual("3 con gà , 4 con vịt");
});
test(' loại bỏ tất cả khoảng trắng đầu và cuối và khoảng trắng ở giũa chỉ để lai 1 khonagr trắng ', () => {
  const myArray = "   chào tất   cả    anh em"
  const sortedArr =MapKey(myArray);
  expect(sortedArr).toEqual("chào tất cả anh em");
});
