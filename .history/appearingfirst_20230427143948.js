function  appearingfirst(array) {
  array.forEach( fruit  => {
    fruit.sort(function(x,y)
           {
           return x-y;
           });
  });
  return array
}
appearingfirst(['Apple', 'Banana', 'Orange', 'Watermelon'])
module.exports= appearingfirst