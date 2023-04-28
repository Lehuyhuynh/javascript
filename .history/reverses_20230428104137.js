function reverses(myArray){
  var newArray=[]
  myArray.forEach(item=>{
    newArray.unshift(item)
    
  });
  return newArray

}
module.exports=reverses
