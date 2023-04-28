function maximumproduct(arr ){
  arr.sort(function(x,y) {
    return x-y
  });
  return arr;
}
module.exports=maximumproduct

