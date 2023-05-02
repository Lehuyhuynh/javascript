// function longestpalindrome (myAray ){
//   myAray.
// }
// console.log(longestpalindrome("AGGTAB"))
// module.exports=longestpalindrome
function reverse (my) {
  var o = '';
  for (var i = my.length - 1; i >= 0; i--)
      o += my[i];
  var c=o.replace(/\W+(.)/g);
  return c.toLowerCase() 
}
console.log(reverse('hello word'))
module.exports=reverse

