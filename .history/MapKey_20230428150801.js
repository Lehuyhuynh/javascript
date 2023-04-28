function MapKey(keys ,collections ){
  var new_Ob
  for(var i=0; i<keys.length; i++)
  {
    for(var j in collections){
      if(keys[i] === collections[j])
    }
  }
  }
module.exports=MapKey

