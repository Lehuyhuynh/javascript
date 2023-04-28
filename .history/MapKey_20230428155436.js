function maximumproduct(arr ){
  arr.sort(function(x,y) {
    return x-y
  });
  return arr;
}
maximumproduct
module.exports=maximumproduct

