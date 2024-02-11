// TC (8-마지막) 통과 안됐던 이유 (reversePath를 구하는 이유)
// 예를 들어, (0, 0) -> (1, 1) 이동 - 0,0,1,1
// 이후 (1, 1) -> (0, 0) 이동 - 1,1,0,0
// 위 경로는 서로 반대 방향으로 이동한 것이고 한 경로가
// 이미 방문한 경로라면 반대 방향인 경로도 이미 방문한 것으로 간주해야 함.
// 그러므로 reversePath를 추가해야 방문 검증을 제대로 할 수 있기 때문에 추가함.

function solution(dirs) {
  const visited = new Set();
  let [dx, dy] = [0, 0];
  let count = 0;
  const [min, max] = [-5, 5];

  for (let i = 0; i < dirs.length; i++) {
    let prevX = dx,
      prevY = dy;
    if (dirs[i] === "U" && dy + 1 <= max) {
      dy++;
    } else if (dirs[i] === "D" && dy - 1 >= min) {
      dy--;
    } else if (dirs[i] === "R" && dx + 1 <= max) {
      dx++;
    } else if (dirs[i] === "L" && dx - 1 >= min) {
      dx--;
    } else {
      continue;
    }

    let path = `${prevX},${prevY},${dx},${dy}`;

    if (!visited.has(path)) {
      count++;
      visited.add(path);
      let reversePath = `${dx},${dy},${prevX},${prevY}`;
      visited.add(reversePath);
    }
  }

  return count;
}
