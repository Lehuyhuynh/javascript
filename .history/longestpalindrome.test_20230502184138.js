const subsequence = require("./longestpalindrome.js");

test('Viết chương trình nhập hai chuỗi và trả về dãy con chung dài nhất của hai chuỗi.', () => {
  const s ="Abc def";
  const sortedArr =  reverse (s);
  expect(sortedArr).toEqual("fedundefinedba");
});
// test('Viết chương trình nhập hai chuỗi và trả về dãy con chung dài nhất của hai chuỗi.', () => {
//   const s1 ="BACDB";
//   const s2="BDCB";
//   const sortedArr = subsequence (s1,s2);
//   expect(sortedArr).toEqual("BCB");
// });
