function maximumproduct(arrmy ){
  arr.sort(function(x,y) {
    return x-y
  });
  var m = arr[0]*arr[1]*arr[arr.length-1];
  var n = arr[arr.length-1]*arr[arr.length-2]*arr[arr.length-3];
  if( m>=n){
      return m
  }
  else{return n}
    
}

module.exports=maximumproduct

