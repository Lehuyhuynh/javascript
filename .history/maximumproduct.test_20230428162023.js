const maximumproduct= require("./maximumproduct");

test('tích lớn nhất của ba phần tử riêng biệt bất kỳ trong danh sách.', () => {
  const myArray=[-4,2,-6,8,3]
  const sortedArr = maximumproduct(myArray);
  expect(sortedArr).toEqual( 192);
});
test('tích lớn nhất của ba phần tử riêng biệt bất kỳ trong danh sách.', () => {
  const myArray=[-10, -5, 0, 1, 2, 3, 4]
  const sortedArr = maximumproduct(myArray);
  expect(sortedArr).toEqual(200)
});
test('tích lớn nhất của ba phần tử riêng biệt bất kỳ trong danh sách.', () => {
  const myArray = [50, 3, 10, 7, 40, 80 ]
  const sortedArr = maximumproduct(myArray);
  expect(sortedArr).toEqual( 160000);
});
test('tích lớn nhất của ba phần tử riêng biệt bất kỳ trong danh sách.', () => {
  const myArray =[3, 10, 2, 1, 20]
  const sortedArr = maximumproduct(myArray);
  expect(sortedArr).toEqual( 600);
});
test('tích lớn nhất của ba phần tử riêng biệt bất kỳ trong danh sách.', () => {
  const myArray =  [70, 11, 20, 4, 100]
  const sortedArr =maximumproduct(myArray);
  expect(sortedArr).toEqual(140000);
});
