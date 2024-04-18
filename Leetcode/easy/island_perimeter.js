/**
 * @param {number[][]} grid
 * @return {number}
 */

// 현재 위치가 섬이면 둘레+=4
// 현재 위치의 왼쪽이 섬이면 둘레-=2
// 현재 위치의 위쪽이 섬이면 둘레-=2
// grid만큼 반복하면서 위 조건을 만족하면 둘레를 계산함.

var islandPerimeter = function (grid) {
  let perimeter = 0;
  let n = grid.length;
  let m = grid[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        perimeter += 4;
        if (i - 1 >= 0 && grid[i - 1][j] === 1) {
          perimeter -= 2;
        }
        if (j - 1 >= 0 && grid[i][j - 1] === 1) {
          perimeter -= 2;
        }
      }
    }
  }

  return perimeter;
};

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
); // 16
