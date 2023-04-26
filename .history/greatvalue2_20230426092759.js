function greatvalue2(m){
  let newArr = m.sort((a, b) => a - b);
  return newArr[m.length-2]
}
greatvalue2([5,7,3,0])
module.exports= greatvalue2