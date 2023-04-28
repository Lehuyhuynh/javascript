const uniqArrayObject= require("./trimAll");

test(' loại bỏ tất cả khoảng trắng đầu và cuối và khoảng trắng ở giũa chỉ để lai 1 khonagr trắng ', () => {
  const myArray="   hello    word     "
  const sortedArr = trimAll(myArray);
  expect(sortedArr).toEqual( "hello word");
});
test(' loại bỏ tất cả khoảng trắng đầu và cuối và khoảng trắng ở giũa chỉ để lai 1 khonagr trắng ', () => {
  const myArray=    I    am    good      “,
  const sortedArr = trimAll(myArray);
  expect(sortedArr).toEqual( "2465")
});
test(' loại bỏ tất cả khoảng trắng đầu và cuối và khoảng trắng ở giũa chỉ để lai 1 khonagr trắng ', () => {
  const myArray = 
  const sortedArr = trimAll(myArray);
  expect(sortedArr).toEqual( "hello3word");
});
test(' loại bỏ tất cả khoảng trắng đầu và cuối và khoảng trắng ở giũa chỉ để lai 1 khonagr trắng ', () => {
  const myArray =
  const sortedArr = trimAll(myArray);
  expect(sortedArr).toEqual("hello36");
});
test(' loại bỏ tất cả khoảng trắng đầu và cuối và khoảng trắng ở giũa chỉ để lai 1 khonagr trắng ', () => {
  const myArray = 
  const sortedArr =trimAll(myArray);
  expect(sortedArr).toEqual("hellowordmodule");
});
