function maximumproduct(arr ){
  arr.sort(function(x,y) {
    return x-y
  });
  for(var i=0; i<arr.length; i++){
    arr[i]*arr[i+1]*arr[arr.length]
     }
}
maximumproduct([4,2,6,8,3])
module.exports=maximumproduct

