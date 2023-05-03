function uniqArrayObject(arr_num)
{
  var result = [];
  var uniqa = [arr_num[0]];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa);
  return result;
  }
console.log(uniqArrayObject([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }] ));
module.exports= uniqArrayObject