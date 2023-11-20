function isSafe(i, j, n) {
  return i >= 0 && j >= 0 && i < n && j < n;
}

function solution(board) {
  const n = board.length;
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1]; // 상하좌우 대각선 나타내는 x 좌표의 변화량
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1]; // 상하좌우 대각선 나타내는 y 좌표의 변화량
  let safeCount = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 0) {
        // 지뢰가 없다면
        let isSafeCell = true;

        for (let k = 0; k < 8; k++) {
          const row = i + dx[k];
          const col = j + dy[k];

          if (isSafe(row, col, n) && board[row][col] === 1) {
            isSafeCell = false;
            break;
          }
        }
        if (isSafeCell) {
          safeCount++;
        }
      }
    }
  }
  return safeCount;
}
