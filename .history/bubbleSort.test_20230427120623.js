const bubbleSort= require("./bubbleSort");

test('the minimum number of moves to set when arranging', () => {
  const array=[5, 1, 4 ,2 ,8]
  const sortedArr = bubbleSort(array);
  expect(sortedArr).toEqual(4);
});
test('the minimum number of moves to set when arranging', () => {
  const array= [3, 1, 4, 2, 6, 5]
  const sortedArr = bubbleSort(array);
  expect(sortedArr).toEqual(5)
});
test('the minimum number of moves to set when arranging', () => {
  const array = [1, 2, 3, 7, 8, 20];
  const sortedArr = bubbleSort(array);
  expect(sortedArr).toEqual(5);
});
test('the minimum number of moves to set when arranging', () => {
  const array =[3, 10, 2, 1, 20]
  const sortedArr = bubbleSort(array);
  expect(sortedArr).toEqual(5);
});
test('the minimum number of moves to set when arranging', () => {
  const array = [50, 3, 10, 7, 40, 80 ]
  const sortedArr = bubbleSort(array);
  expect(sortedArr).toEqual(5);
});
