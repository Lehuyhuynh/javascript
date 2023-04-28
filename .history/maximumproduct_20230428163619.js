function maximumsum(myArray ){
  myArray.sort(function(x,y) {
    return x-y
  });
  var m = myArray[0]*myArray[1]*myArray[myArray.length-1];
  var n = myArray[myArray.length-1]*myArray[myArray.length-2]*myArray[myArray.length-3];
  if( m>=n){
      return m
  }
  else{return n}
    
}
maximumproduct([4,2,])
module.exports=maximumsum

