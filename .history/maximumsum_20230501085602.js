function subsequence(a, b ){
  var n= a.length, m=b.length;
  String
  var s
  for (var i = 0; i < s.length; i++){
    for(var j=0;j<s[i].length;j++){
      s[i][j];
    }
  }
  for(var i=1; i<n;i++){
    for(var j=1;j<=m;j++){
      if(a[i-1] == b[j-1]){
        s[i][j] = s[i-1][j-1]+1
      }
      else{
        s[i][j]=max(s[i-1][j], s[i][j-1]);
      }
    }
    return s[n][m]
  }
}
var c=subsequence("abcdef", "abczyzcdef")
console.log(c)
  
module.exports=subsequence


