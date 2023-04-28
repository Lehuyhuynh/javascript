function reverses(myArray){
  var newArray=[]
  for (let i= myArray.length-1; i>=0;i--){
      newArray.push(myArray[i])
  }
  return newArray.join('')
}
var c= reverses("hello")
console.log(c)

module.exports=reverses
console.log()