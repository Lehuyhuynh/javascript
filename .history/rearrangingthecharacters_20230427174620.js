function rearrangingthecharacters (array) {
  var new_array=array.replaceAll(' ', '')
  var new_Array = new_array.toLowerCase()
  
  return new_Array
}

rearrangingthecharacters('A man a plan a canal Panama')
module.exports=rearrangingthecharacters
