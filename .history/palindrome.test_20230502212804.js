const palindrome = require("./palindrome.js");

test('Viết chương trình lấy một chuỗi làm đầu vào và trả về độ dài của bảng màu dài nhất có thể được tạo thành bằng cách sắp xếp lại các ký tự trong chuỗi.', () => {
  const myArray ="Abc def";
  const sortedArr =  palindrome(myArray);
  expect(sortedArr).toEqual(false);
});
// test('Viết chương trình nhập hai chuỗi và trả về dãy con chung dài nhất của hai chuỗi.', () => {
//   const s1 ="BACDB";
//   const s2="BDCB";
//   const sortedArr = palindrome (s1,s2);
//   expect(sortedArr).toEqual("BCB");
// });
