function characters(myArray ){
  var newArray = myArray.replace(/\s+/g,'')
  var new_Array=newArray.toLowerCase()
  var x=new_Array.split(' ');
  return x.reverse()
}
var c=characters("A man a plan a canal Panama")

module.exports=characters
console.log()

