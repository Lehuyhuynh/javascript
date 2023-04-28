const  appearingfirst= require("./longestincreasingsubsequence");

test('the minimum number of moves to set when arranging', () => {
  const array=['apple', 'manana', 'crange', 'btermelon']
  const sortedArr =  appearingfirst(array);
  expect(sortedArr).toEqual([ 'btermelon', 'manana', 'crange', 'apple' ]);
});
test('the minimum number of moves to set when arranging', () => {
  const array=["largest" ,"difference" ,"between" ,"any two", "elements", "in the list"]
  const sortedArr =  appearingfirst(array);
  expect(sortedArr).toEqual([
    'in the list',
    'difference',
    'elements',
    'any two',
    'between',
    'largest'
  ])
});
test('the minimum number of moves to set when arranging', () => {
  const array = ["Online", "35467384993948", "Editor", "for free"];
  const sortedArr =  appearingfirst(array);
  expect(sortedArr).toEqual([ '35467384993948', 'for free', 'Editor', 'Online' ]);
});
test('the minimum number of moves to set when arranging', () => {
  const array =["33", "35467384993948", 33, "for free"]
  const sortedArr =  appearingfirst(array);
  expect(sortedArr).toEqual([ '35467384993948', 'for free', 33, '33' ]);
});
test('the minimum number of moves to set when arranging', () => {
  const array = [NaN, "3", 33, "for free"]
  const sortedArr = appearingfirst(array);
  expect(sortedArr).toEqual([ NaN, 'for free', 33, '3' ]);
});
