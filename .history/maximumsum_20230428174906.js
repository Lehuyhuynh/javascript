function characters(myArray ){
  var a=myArray.replace(/\s+/g,'').toLowerCase().split('').reverse()
return a

}
var c=characters("A man a plan a canal Panamaadhjdhushk")
module.exports=characters
console.log(c)

