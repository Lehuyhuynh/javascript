function subsequence(a, b ){
  var n= a.length, m=;
  for (var l = 0; i < a.length )
  for(var i=1; i<n;i++){
    for(var j=1;j<=m;j++){
      if(a[i-1] == b[j-1]){
        s[i][j] = s[i-1][j-1]+1
      }
    }
  }
}
  
module.exports=subsequence


