function subsequence(s1, s2 ){
  var t;
  var F=[1002][1005]
  while(t--){
    memset(F,0,sizeof(F))
    for(var i=1; i<=s1.length;i++ ){
      for(var j=1; j<=s2.length;j++ ){
        if(s1[i-1]==s2[j-1]){ }
      }
    }
  }
}
  
module.exports=subsequence


