function  appearingfirst(array) {
  var len=0
for (let i = 0; i < array.length - 1; i++) {
  for (let j = array.length - 1; j > i; j--) {
    if (array[j] < array[j - 1]) {
      let t = array[j];
      array[j] = array[j - 1];
      array[j - 1] = t;
    }
    
  }
  len+=1
}
return len ;
}

module.exports= bubbleSort