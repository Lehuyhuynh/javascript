function characters(myArray ){
  var newArray = myArray.replace(/\s+/g,'')
  var new_Array=newArray.toLowerCase()
  return new_Array
}
characters("A man a plan a canal Panama")

module.exports=characters

