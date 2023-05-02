const palindrome = require("./palindrome.js");

test('Viết chương trình nhập hai chuỗi và trả về dãy con chung dài nhất của hai chuỗi.', () => {
  const myArray ="Abc def";
  const sortedArr =  palindrome(s);
  expect(sortedArr).toEqual("fedundefinedba");
});
// test('Viết chương trình nhập hai chuỗi và trả về dãy con chung dài nhất của hai chuỗi.', () => {
//   const s1 ="BACDB";
//   const s2="BDCB";
//   const sortedArr = palindrome (s1,s2);
//   expect(sortedArr).toEqual("BCB");
// });
