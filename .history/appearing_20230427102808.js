function appearing(arr) {
  let newArr = 0;
  let len=[];
  for(var  i=0 ; i<arr.length;i++){
    if(newArr <= arr[i].length){
      newArr = arr[i]
    }
    return len.push(newArr);
  }
  return newArr
}
appearing( ['apple', 'banana', 'orange', 'kiwi', 'strawberry'])
module.exports= findMedian2