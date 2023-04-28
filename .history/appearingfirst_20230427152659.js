function  appearingfirst(array) {
  var new_array=array.forEach(function (x,i){
    let idmin = i;
    for (let j = i + 1; j <array.length; j++) {
      if (array[j].length > array[idmin].length) idmin = j;
    }

    // swap
    let t = array[i];
    array[i] = array[idmin];
    array[idmin] = t;
  });
  return array;
}
}
appearingfirst(['apple', 'manana', 'crange', 'btermelon'])
module.exports= appearingfirst