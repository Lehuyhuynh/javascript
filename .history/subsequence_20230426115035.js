function subsequence(a,b)
{
  var n = a.length;  // n chiều dài xâu a, m chiều dài xâu b
    var m = b.length;
    var max_Size;     // Biến lưu độ dài con chung lớn nhất
    let subsequence = ""; // Biến lưu con chung dùng khi truy vết
    var L[n ][m ];   // Khai báo mảng lưu kết quả:  n+1 hàng, m+1 cột
    
    for(var i=0; i<=n; i++)   // Gán cột đầu tiên bằng 0
        L[i][0] = 0;
    for(var j=0; j<=m; j++)   // Gán hàng đầu tiên = 0
        L[0][j] = 0;
        
    for(var i = 1; i<=n; i++){
        for(var j = 1; j<=m; j++){
            if(a[i-1] == b[j-1]){  // Nếu có phần tử bằng nhau
                L[i][j] = L[i-1][j-1] + 1;   // Áp dụng công thức
            }
            else{   // Trường hợp a[i-1] khác b[j-1]
                if(L[i-1][j] >= L[i][j-1])     // Tìm max giữa L[i-1][j] và L[i][j-1]
                    L[i][j] = L[i-1][j];
                else
                    L[i][j] = L[i][j-1];
            }
        }
    }
}
module.exports= subsequence