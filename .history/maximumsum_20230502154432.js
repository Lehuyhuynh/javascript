function subsequence(s1, s2 ){
  var t;
  var F=[1002][1005]
  while(t--){
    var res =0;
    memset(F,0,sizeof(F))
    for(var i=1; i<=s1.length;i++ ){
      for(var j=1; j<=s2.length;j++ ){
        if(s1[i-1]==s2[j-1]){ F[i][j] = F[i-1][j-1]+1 }
        else {F[i][j] = Math.max(F[i-1][j],F[i][j-1])}
        res = Math.max(res,F[])
      }
    }
  }
}
  
module.exports=subsequence


