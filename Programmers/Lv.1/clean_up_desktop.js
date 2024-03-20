// #이 있는 부분의 좌표를 배열 안에 넣음.
// 배열의 각 요소의 0번째 요소는 행, 1번째 요소는 열
// 배열의 각 요소의 0번째 요소 중 가장 작은 값은 행의 시작점 → lux
// 배열의 각 요소의 1번째 요소 중 가장 작은 값은 열의 시작점 → luy
// 배열의 각 요소의 0번째 요소 중 가장 큰 값에 1을 더한 값은 행의 끝점 → rdx
// 배열의 각 요소의 1번째 요소 중 가장 큰 값에 1을 더한 값은 열의 끝점 → rdy
// lux, luy, rdx, rdy를 반환

function solution(wallpaper) {
  const n = wallpaper.length;
  const m = wallpaper[0].length;
  const arr = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (wallpaper[i][j] === "#") {
        arr.push([i, j]);
      }
    }
  }
  return [
    Math.min(...arr.map((a) => a[0])),
    Math.min(...arr.map((a) => a[1])),
    Math.max(...arr.map((a) => a[0])) + 1,
    Math.max(...arr.map((a) => a[1])) + 1,
  ];
}
