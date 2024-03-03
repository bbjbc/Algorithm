// 0
// 00
// 000
// 0000

// [0][0]
// [1][0] [1][1]
// [2][0] [2][1] [2][2]
// [3][0] [3][1] [3][2] [3][3]

// 아래로 이동 - row가 늘어나면 숫자 +1
// 오른쪽으로 이동 - col이 늘어나면 숫자 +1
// 대각 왼쪽 위로 이동 - row와 col이 감소하면서 숫자 +1

function solution(n) {
  const result = new Array(n).fill().map((_, i) => new Array(i + 1).fill(0));
  let a = 1,
    row = 0,
    col = 0;
  const maxNumber = (n * (n + 1)) / 2;

  while (a <= maxNumber) {
    // 아래로 이동
    while (row < n && result[row][col] === 0) {
      result[row][col] = a++;
      row++;
    }
    row--;
    col++;

    // 오른쪽으로 이동
    while (col < result[row].length && result[row][col] === 0) {
      result[row][col] = a++;
      col++;
    }
    col -= 2;
    row--;

    // 대각 왼쪽 위로 이동
    while (row >= 0 && col >= 0 && result[row][col] === 0) {
      result[row][col] = a++;
      row--;
      col--;
    }
    row += 2;
    col++;
  }
  return [].concat(...result);
}
