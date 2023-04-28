const maximumproduct= require("./maximumsum");

test('tích lớn nhất của ba phần tử riêng biệt bất kỳ trong danh sách.', () => {
  const myArray=[4,2,3,5,-1,7,-8,9,10]
  const sortedArr = maximumproduct(myArray);
  expect(sortedArr).toEqual( 18);
});
test('tích lớn nhất của ba phần tử riêng biệt bất kỳ trong danh sách.', () => {
  const myArray=[-10, -5, 0, 1, 2, 3, 4,8,9,10]
  const sortedArr = maximumproduct(myArray);
  expect(sortedArr).toEqual(31)
});
test('tích lớn nhất của ba phần tử riêng biệt bất kỳ trong danh sách.', () => {
  const myArray = [50, 3, 10, -7, 40, -80,4,2,-90 ]
  const sortedArr = maximumproduct(myArray);
  expect(sortedArr).toEqual( 56);
});
test('tích lớn nhất của ba phần tử riêng biệt bất kỳ trong danh sách.', () => {
  const myArray =[3, -10, 2, 1, -20,4,9,2,0]
  const sortedArr = maximumproduct(myArray);
  expect(sortedArr).toEqual( 15);
});
test('tích lớn nhất của ba phần tử riêng biệt bất kỳ trong danh sách.', () => {
  const myArray =  [-70, 11, -20, 4, 100,10,25,-40]
  const sortedArr =maximumproduct(myArray);
  expect(sortedArr).toEqual(139);
});
