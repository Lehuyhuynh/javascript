function subsequence (a, b ){
  var n = a.length();
  var m = b.size();
  var max_Size;
  let subsequence = "";
  var L= [n+1][m+1];
  for(int i=0; i<=n; i++){
    L[i][0] = 0;
  }
  for(int j=0; j<=m; j++) {
    L[0][j] = 0;
  }
}
console.log(subsequence("AGGTAB", "GXTXAYB"))
module.exports=subsequence

