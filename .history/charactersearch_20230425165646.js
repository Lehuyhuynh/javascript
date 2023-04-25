function charactersearch(m){
  let count=0
  for(var i =0 ;  i< m.length; i++){
    if(m[i].includes("a")){
      return count=count+1
    }
    return count;
}


module.exports= charactersearch