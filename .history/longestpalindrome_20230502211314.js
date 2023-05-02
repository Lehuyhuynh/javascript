// function longestpalindrome (myAray ){
//   myAray.
// }
// console.log(longestpalindrome("AGGTAB"))
// module.exports=longestpalindrome
function reverse (myArray) {
  var Array = '';
  for (var i = myArray.length - 1; i >= 0; i--)
      Array += myArray[i];
  var c=Array.replace(/\W+(.)/g);
  var d= c.toLowerCase() 

}
console.log(reverse('hello word'))
module.exports=reverse

