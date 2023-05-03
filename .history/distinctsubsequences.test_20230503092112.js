const distinctsubsequences = require("./distinctsubsequences.js");

test('uniq ArrayObject: Giống Uniq nhưng mở rộng cho 1 collection', () => {
  const arr_num = [1, 2, 3, 4, 5]
  const sortedArr =  distinctsubsequences(arr_num);
  expect(sortedArr).toEqual(3);
});
test('uniq ArrayObject: Giống Uniq nhưng mở rộng cho 1 collection', () => {
  const arr_num = [{ 'x': 1, 'y': 3 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }] 
  const sortedArr =  distinctsubsequences(arr_num);
  expect(sortedArr).toEqual([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }] );
});
test('uniq ArrayObject: Giống Uniq nhưng mở rộng cho 1 collection', () => {
  const arr_num =[{ 'x': 1, 'y': 2 }, { 'x': 1, 'y': 2 }, { 'x': 1, 'y': 2 }] ;
  const sortedArr =  distinctsubsequences(arr_num);
  expect(sortedArr).toEqual([{ 'x': 1, 'y': 2 }] );
});


