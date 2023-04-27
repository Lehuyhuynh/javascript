function subsequence(arr_num)
{
  int result = 1;
for (int i=1; i<=n; i++) {
    f[i] = 0;
    for (int j=0; j<i; j++) if (a[j] < a[i]) {
        f[i] = max(f[i], f[j] + 1);
    }
    result = max(result, f[i]);
}
}
subsequence([1,4,2,6,5,8])

module.exports= understanding
