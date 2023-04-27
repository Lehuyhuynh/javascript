function rearrangingthecharacters (array) {
  var new_array=array.replaceAll(' ', '')
  var new_Array = new_array.toLowerCase()
  var Array = reverseString(new_Array);
  return Array
}
rearrangingthecharacters('A man a plan a canal Panama')
module.exports=longestincreasingsubse