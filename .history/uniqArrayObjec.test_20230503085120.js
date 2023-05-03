const uniqArrayObject = require("./uniqArrayObject.js");

test('Viết chương trình lấy một chuỗi làm đầu vào và trả về độ dài của bảng màu dài nhất có thể được tạo thành bằng cách sắp xếp lại các ký tự trong chuỗi.', () => {
  const myArray =[{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }] 
  const sortedArr =  uniqArrayObject(myArray);
  expect(sortedArr).toEqual(false);
});
test('Viết chương trình lấy một chuỗi làm đầu vào và trả về độ dài của bảng màu dài nhất có thể được tạo thành bằng cách sắp xếp lại các ký tự trong chuỗi.', () => {
  const myArray ="aba";
  const sortedArr =  uniqArrayObject(myArray);
  expect(sortedArr).toEqual('aba');
});
test('Viết chương trình lấy một chuỗi làm đầu vào và trả về độ dài của bảng màu dài nhất có thể được tạo thành bằng cách sắp xếp lại các ký tự trong chuỗi.', () => {
  const myArray ="A man a plan a canal Panama";
  const sortedArr =  uniqArrayObject(myArray);
  expect(sortedArr).toEqual('amanaplanacanalpanama');
});
test('Viết chương trình lấy một chuỗi làm đầu vào và trả về độ dài của bảng màu dài nhất có thể được tạo thành bằng cách sắp xếp lại các ký tự trong chuỗi.', () => {
  const myArray ="Write a program that ";
  const sortedArr =  uniqArrayObject(myArray);
  expect(sortedArr).toEqual(false);
});
test('Viết chương trình lấy một chuỗi làm đầu vào và trả về độ dài của bảng màu dài nhất có thể được tạo thành bằng cách sắp xếp lại các ký tự trong chuỗi.', () => {
  const myArray ="ggg";
  const sortedArr =  uniqArrayObject(myArray);
  expect(sortedArr).toEqual('222');
});
