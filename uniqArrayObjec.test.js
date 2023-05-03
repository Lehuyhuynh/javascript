const uniqArrayObject = require("./uniqArrayObject.js");

test('Viết chương trình lấy một chuỗi làm đầu vào và trả về độ dài của bảng màu dài nhất có thể được tạo thành bằng cách sắp xếp lại các ký tự trong chuỗi.', () => {
  const arr_num =[{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }] 
  const sortedArr =  uniqArrayObject(arr_num);
  expect(sortedArr).toEqual([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]);
});
test('Viết chương trình lấy một chuỗi làm đầu vào và trả về độ dài của bảng màu dài nhất có thể được tạo thành bằng cách sắp xếp lại các ký tự trong chuỗi.', () => {
  const arr_num = [{ 'x': 1, 'y': 3 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }] 
  const sortedArr =  uniqArrayObject(arr_num);
  expect(sortedArr).toEqual([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }] );
});
test('Viết chương trình lấy một chuỗi làm đầu vào và trả về độ dài của bảng màu dài nhất có thể được tạo thành bằng cách sắp xếp lại các ký tự trong chuỗi.', () => {
  const arr_num =[{ 'x': 1, 'y': 2 }, { 'x': 1, 'y': 2 }, { 'x': 1, 'y': 2 }] ;
  const sortedArr =  uniqArrayObject(arr_num);
  expect(sortedArr).toEqual([{ 'x': 1, 'y': 2 }] );
});


