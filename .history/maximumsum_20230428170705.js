function characters(myArray ){
  var newArray = myArray.replace(/\s+/g,'')
  var new_Array=newArray
  return newArray
}
characters("A man a plan a canal Panama")

module.exports=characters

