function subsequence (a, b ){
  var n = a.length();
  var m = b.size();
  var max_Size;
  let subsequence = "";
  var L= [n+1][m+1];
  for(int i=0; i<=n; i++){
    L[i][0] = 0;
  }
  for(int j=0; j<=m; j++) {
    L[0][j] = 0;
  }

  for(int i = 1; i<=n; i++){
    for(int j = 1; j<=m; j++){
      if(a[i-1] == b[j-1]){  // Nếu có phần tử bằng nhau
            L[i][j] = L[i-1][j-1] + 1;   // Áp dụng công thức
      }
      else{   // Trường hợp a[i-1] khác b[j-1]
        if(L[i-1][j] >= L[i][j-1])     // Tìm max giữa L[i-1][j] và L[i][j-1]
          {L[i][j] = L[i-1][j];}
        else
          { L[i][j] = L[i][j-1];}
      }
    }
  }
  max_Size = L[n][m];  // Tìm được độ dài con lớn nhất
  int i = n; 
  int j = m;
  while(L[i][j] != 0){ // Điều kiện dừng
      if(a[i-1] == b[j-1]){  // Nếu bằng nhau
          subsequence += a[i-1];   // Cộng a[i-1] vào xâu con
          i--;
          j--;
      }
      else{  // Nếu khác nhau
          if(L[i-1][j] >= L[i][j-1]) // So sánh
              i--;
          else
              j--;
      }
  }
}
console.log(subsequence("AGGTAB", "GXTXAYB"))
module.exports=subsequence

