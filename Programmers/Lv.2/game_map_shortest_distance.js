// 1. 최단 경로를 찾아야 함.
// 2. 왼쪽으로 가면 -1, 오른쪽이면 1, 위로 가면 -1, 아래로 가면 +1
// 3. 초기값은 (0,0)에서 시작하며 시작위치도 counting해서 1부터 시작함.
// 4. 도착지점은 (n-1, m-1)
// 5. 도착지점에 도달하면 count를 반환함.
// 6. 게임 맵을 벗어났을 때와 벽일 때 고려함.
// 7. 방문한 곳은 다시 방문하지 않도록 함.

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const dx = [-1, 1, 0, 0]; // 서, 동, 북, 남
  const dy = [0, 0, -1, 1]; // 서, 동, 북, 남
  const arr = [[0, 0, 1]]; // x, y, count

  while (arr.length > 0) {
    const [x, y, count] = arr.shift();
    // 게임 목표 지점에 도달했을 때
    if (x === n - 1 && y === m - 1) {
      return count;
    }
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 게임 맵을 벗어났을 때
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
        continue;
      }
      // 벽일 때
      if (maps[nx][ny] === 0) {
        continue;
      }
      // 방문한 곳이면 무시
      if (maps[nx][ny] === "방문") {
        continue;
      }

      maps[nx][ny] = "방문";
      arr.push([nx, ny, count + 1]);
      //   console.log(maps[nx][ny]);
    }
  }
  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
