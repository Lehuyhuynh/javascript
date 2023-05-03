function subset (m) {
  var sum=0
  for(var i=0;i<m.length;i++){
    sum+= m[i]
    return sum
  }
}
module.exports=subset