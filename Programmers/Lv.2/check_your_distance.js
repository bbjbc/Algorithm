// P : 응시자가 앉아있는 자리 / O : 빈 테이블 / X : 파티션(가림막)
// 해당 요소가 P인 경우, 상하좌우에 P가 있는지 확인 → 있으면 0
// 해당 요소가 O인 경우, 상하좌우에 P가 2개 이상 있는지 확인 → 있으면 0
// 해당 요소가 X인 경우, 무시
// 모든 경우를 통과하면 1을 반환하고, 하나라도 통과하지 못하면 0을 반환

// 1. 처음 풀이 (bfs아님)
function adjacentPlace(arr) {
  const place = arr.map((a) => a.split(""));
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, -1, 1];

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (place[i][j] === "P") {
        for (let k = 0; k < 4; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];
          if (nx >= 0 && ny >= 0 && nx < 5 && ny < 5) {
            if (place[nx][ny] === "P") {
              return 0;
            }
          }
        }
      }
      if (place[i][j] === "O") {
        let count = 0;
        for (let k = 0; k < 4; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];
          if (nx >= 0 && ny >= 0 && nx < 5 && ny < 5 && place[nx][ny] === "P") {
            count++;
            if (count >= 2) {
              return 0;
            }
          }
        }
      }
    }
  }
  return 1;
}

function solution(places) {
  return places.map((a) => adjacentPlace(a));
}

console.log(
  solution([
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
  ])
);

// 2. 리팩토링
function adjacentPlace(arr) {
  const place = arr.map((a) => a.split(""));
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, -1, 1];

  // 해당 좌표가 유효한지 확인하는 메서드
  function isValidCell(x, y) {
    return x >= 0 && y >= 0 && x < 5 && y < 5;
  }

  // 해당 좌표에 상하좌우에 사람이 있는지 확인하는 메서드
  function countAdjacentPeople(x, y) {
    let count = 0;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (isValidCell(nx, ny) && place[nx][ny] === "P") {
        count++;
      }
    }
    return 0;
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      // 해당 좌표가 P인 경우, 상하좌우에 P가 있는지 확인
      if (place[i][j] === "P") {
        for (let k = 0; k < 4; k++) {
          const nx = i + dx[k];
          const ny = j + dy[k];
          if (isValidCell(nx, ny)) {
            if (place[nx][ny] === "P") {
              return 0;
            }
          }
        }
      }
      // 해당 좌표가 O인 경우, 상하좌우에 P가 2개 이상 있는지 확인
      if (place[i][j] === "O") {
        if (countAdjacentPeople(i, j) >= 2) {
          return 0;
        }
      }
    }
  }
  return 1;
}

function solution(places) {
  return places.map((a) => adjacentPlace(a));
}
