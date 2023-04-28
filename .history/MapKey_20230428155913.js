function maximumproduct(arr ){
  arr.sort(function(x,y) {
    return x-y
  });
  for(var i=0; i<arr.length; i++){
    var m = arr[i]*arr[i+1]*arr[arr.length];
    var n =arr[arr.length]*arr[arr.length-1]*arr[arr.length-2];
    if (m<=n){
      return
    }
    }
}
maximumproduct([4,2,6,8,3])
module.exports=maximumproduct

