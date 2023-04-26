function greatvalue2(m){
  let arr=m( function(a,b) () => {
    return a-b
  });
  return arr
}
greatvalue2([5,7,3,0])
module.exports= greatvalue2