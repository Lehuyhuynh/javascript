function  appearingfirst(array) {
  array.forEach( fruit  => {
    fruit.sort(function(x,y)
           {
           return x-y;
           });
  });
  return array
}
appearingfirst(['Apple', 'manana', 'Orange', 'Watermelon'])
module.exports= appearingfirst