function MapKey(keys ,collections ){
  for(var i=0; i<keys.length; i++)
  {
    for(var j in collections){
      if(keys[i] === collections[j])
    }
  }
  }
module.exports=MapKey

