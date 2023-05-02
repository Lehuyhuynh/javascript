const palindrome = require("./palindrome.js");

test('Viết chương trình lấy một chuỗi làm đầu vào và trả về độ dài của bảng màu dài nhất có thể được tạo thành bằng cách sắp xếp lại các ký tự trong chuỗi.', () => {
  const myArray ="Abc def";
  const sortedArr =  palindrome(myArray);
  expect(sortedArr).toEqual(false);
});
test('Viết chương trình lấy một chuỗi làm đầu vào và trả về độ dài của bảng màu dài nhất có thể được tạo thành bằng cách sắp xếp lại các ký tự trong chuỗi.', () => {
  const myArray ="aba";
  const sortedArr =  palindrome(myArray);
  expect(sortedArr).toEqual('aba');
});
test('Viết chương trình lấy một chuỗi làm đầu vào và trả về độ dài của bảng màu dài nhất có thể được tạo thành bằng cách sắp xếp lại các ký tự trong chuỗi.', () => {
  const myArray ="A man a plan a canal Panama";
  const sortedArr =  palindrome(myArray);
  expect(sortedArr).toEqual('amanaplanacanalpanama');
});
test('Viết chương trình lấy một chuỗi làm đầu vào và trả về độ dài của bảng màu dài nhất có thể được tạo thành bằng cách sắp xếp lại các ký tự trong chuỗi.', () => {
  const myArray ="Write a program that ";
  const sortedArr =  palindrome(myArray);
  expect(sortedArr).toEqual(false);
});
test('Viết chương trình lấy một chuỗi làm đầu vào và trả về độ dài của bảng màu dài nhất có thể được tạo thành bằng cách sắp xếp lại các ký tự trong chuỗi.', () => {
  const myArray ="ggg";
  const sortedArr =  palindrome(myArray);
  expect(sortedArr).toEqual('2g');
});
