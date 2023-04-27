function  appearingfirst(array) {
  array.forEach( fruit  => {
    fruit.sort(function(x,y)
           {
           return x-y;
           });
  });
}it
module.exports= appearingfirst