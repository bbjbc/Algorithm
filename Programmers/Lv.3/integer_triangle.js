// DP를 이용한 정수 삼각형 문제임
// 2차원 배열을 이용하여 각 위치까지의 최대값을 구함
// 각 위치까지의 최대값은 이전 위치의 최대값에 현재 위치의 값을 더한 값임
// 이전 위치의 최대값은 현재 위치의 왼쪽 위와 오른쪽 위 중 큰 값을 선택함
// 이를 반복하여 마지막 위치까지의 최대값을 구함

function solution(triangle) {
  for (let i = triangle.length - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length - 1; j++) {
      triangle[i - 1][j] += Math.max(triangle[i][j], triangle[i][j + 1]);
    }
  }

  return triangle[0][0];
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));
