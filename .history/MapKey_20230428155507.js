function maximumproduct(arr ){
  arr.sort(function(x,y) {
    return x-y
  });
  
}
maximumproduct([4,2,6,8,3])
module.exports=maximumproduct

