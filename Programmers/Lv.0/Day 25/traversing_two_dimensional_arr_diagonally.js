function solution(board, k) {
  let sum = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i + j <= k) sum += board[i][j];
    }
  }
  return sum;
}

// 0v  1v  2v
// 1v  2v  3
// 2v  3   4
// 3   4   5
