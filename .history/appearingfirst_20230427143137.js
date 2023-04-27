function  appearingfirst(array) {
  var arr_num=array.forEach( function(x,y)  => {
    return y-x;
  });
}
module.exports= appearingfirst