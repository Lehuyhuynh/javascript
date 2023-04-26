function greatvalue2(m){
  let count
  for(var i =0 ;  i< m.length; i++){
    if(m[i].includes("a")){
      count=count+1
    }
  }
  return count;
}
module.exports= charactersearch