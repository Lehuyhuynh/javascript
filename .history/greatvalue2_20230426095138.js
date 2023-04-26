function greatvalue2(m){
  let newArr = m.sort((a, b) => a - b);
  // return newArr[m.length-2];
  for(var i=m ; i=<m.length;i--){
    if(newArr[m.length-i] === Math.max(newArr)){
      newArr[m.length[i]-1]
    }
    else{
      return newArr[m.length-2]
    }
  }
  return  newArr[m.length]
}

module.exports= greatvalue2