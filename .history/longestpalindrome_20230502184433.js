// function longestpalindrome (myAray ){
//   myAray.
// }
// console.log(longestpalindrome("AGGTAB"))
// module.exports=longestpalindrome
function reverse (myArray) {
  var D = '';
  for (var i = myArray.length - 1; i >= 0; i--)
      o += myArray[i];
  var c=o.replace(/\W+(.)/g);
  return c.toLowerCase() 
}
console.log(reverse('hello word'))
module.exports=reverse

