function greatvalue2(m){
  let newArr = m.sort((a, b) => a - b);
  // return newArr[m.length-2];
  
  return  newArr[m.length]
}

module.exports= greatvalue2