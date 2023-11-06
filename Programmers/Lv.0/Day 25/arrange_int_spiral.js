function solution(n) {
  const result = [];
  let num = 1;
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;

  for (let i = 0; i < n; i++) {
    result.push([0]);
  }

  while (num <= n * n) {
    // 위쪽 행 (1,2,3,4)
    for (let i = left; i <= right; i++) result[top][i] = num++;
    top++;

    // 오른쪽 열 (5,6,7)
    for (let i = top; i <= bottom; i++) result[i][right] = num++;
    right--;

    // 아래 열 (8,9,10)
    for (let i = right; i >= left; i--) result[bottom][i] = num++;
    bottom--;

    // 왼쪽 열 (11,12)
    for (let i = bottom; i >= top; i--) result[i][left] = num++;
    left++;
  }
  return result;
}
