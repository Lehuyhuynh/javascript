function greatvalue2(m){
  let newArr = arr.sort((a, b) => a - b);
  return newArr[-2]
}
greatvalue2([5,7,3,0])
module.exports= greatvalue2