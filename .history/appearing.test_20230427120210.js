const bubbleSort= require("./bubbleSort");

test('the minimum number of moves to set when arranging', () => {
  const array=[5, 1, 4 ,2 ,8]
  const sortedArr = bubbleSort(array);
  expect(sortedArr).toEqual();
});
test('the minimum number of moves to set when arranging', () => {
  const array= ["largest" ,"difference" ,"between" ,"any two", "elements", "in the list"]
  const sortedArr = bubbleSort(array);
  expect(sortedArr).toEqual([
    'largest',
    'between',
    'any two',
    'elements',
    'difference',
    'in the list'
  ]
  );
});
test('the minimum number of moves to set when arranging', () => {
  const array = ["Online", "35467384993948", "Editor", "for free"];
  const sortedArr = bubbleSort(array);
  expect(sortedArr).toEqual([ 'Online', 'Editor', 'for free', '35467384993948' ]);
});
test('the minimum number of moves to set when arranging', () => {
  const array =["33", "35467384993948", 33, "for free"]
  const sortedArr = bubbleSort(array);
  expect(sortedArr).toEqual([ '33', 'for free', 33, '35467384993948' ]);
});
test('the minimum number of moves to set when arranging', () => {
  const array = [NaN, "35467384993948", 33, "for free"]
  const sortedArr = bubbleSort(array);
  expect(sortedArr).toEqual([ NaN, 'for free', 33, '35467384993948' ]);
});
