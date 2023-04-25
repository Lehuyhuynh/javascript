function shorteststring(a,b){
  var c=toString(a).length
  var d=toString(b).length
  if( c===d){
    return a,b
  }
  else if(c>d){
    return b
  }
  else{
    return a
  }

}
module.exports = shorteststring;