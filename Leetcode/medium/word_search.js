/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// 1. board의 길이와 너비를 n, m에 저장
// 2. dx, dy를 통해 상하좌우를 탐색하기 위한 배열 생성
// 3. visited를 통해 방문 여부를 저장
// 4. dfs를 통해 탐색 시작
// 5. idx가 word의 길이와 같으면 true 반환
// 6. x, y가 board의 범위를 벗어나거나 방문했거나 board[x][y]가 word[idx]와 다르면 false 반환
// 7. 방문 표시를 하고 상하좌우를 탐색
// 8. dfs를 통해 탐색한 결과가 true이면 true 반환
// 9. 방문 표시를 해제하고 false 반환
// 10. 모든 경우를 탐색한 후 false 반환

var exist = function (board, word) {
  const n = board.length;
  const m = board[0].length;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  const dfs = (x, y, idx, visited) => {
    if (idx === word.length) return true;
    if (
      x < 0 ||
      y < 0 ||
      x >= n ||
      y >= m ||
      visited[x][y] ||
      board[x][y] !== word[idx]
    )
      return false;

    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (dfs(nx, ny, idx + 1, visited)) return true;
    }
    visited[x][y] = false;
    return false;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(i, j, 0, visited)) return true;
    }
  }
  return false;
};

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
); // true
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "SEE"
  )
); // true
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  )
); // false
