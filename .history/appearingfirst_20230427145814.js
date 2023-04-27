function  appearingfirst(array) {
  ar
  array.forEach( fruit  => {
    fruit.sort(function(x,y)
           {
           return x-y;
           });
  });
  return array
}
appearingfirst(['apple', 'manana', 'crange', 'btermelon'])
module.exports= appearingfirst