function hauto (c ){
  if(c == "^") {return 5;}
  if( c == '*' || c == '/')  {return 4;}
  if( c== '+' || c== '-')   {return 3}
  else  {return 2;}

}
console.log(subsequence("AGGTAB", "GXTXAYB"))
module.exports=subsequence


