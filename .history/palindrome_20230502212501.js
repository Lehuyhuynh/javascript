function reverse (myArray) {
  var Array = '';
  for (var i = myArray.length - 1; i >= 0; i--)
     { Array += myArray[i];}
  var c=Array.replace(/\W+(.)/g);
  var d= c.toLowerCase() 
  for( var i=1; i<=d.length;i++){
    if(d[i] == d[d.length-1]){return d}
    else  { return false;}
  }
  return d;
}
console.log(reverse('hhh'))
module.exports=reverse