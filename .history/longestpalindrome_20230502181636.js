function longestpalindrome (c ){
  if(c == "^") {return 5;}
  if( c == '*' || c == '/')  {return 4;}
  if( c== '+' || c== '-')   {return 3}
  else  {return 2;}


}
console.log(longestpalindrome("AGGTAB", "GXTXAYB"))
module.exports=longestpalindrome


