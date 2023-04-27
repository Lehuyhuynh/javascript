function subsequence(arr_num)
{
  var result = 1;
  for (var i=1; i<=arr_num.length; i++) {
    f[i] = 0;
    for (var j=0; j<i; j++) {
      if(a[j] < a[i]) {
        f[i] = max(f[i], f[j] + 1);
    }
    result = max(result, f[i]);
    }
    restuen result

}
subsequence([1,4,2,6,5,8])

module.exports= understanding
