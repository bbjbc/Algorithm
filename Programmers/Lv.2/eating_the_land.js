function solution(land) {
  let max = 0;
  const dp = [];
  // 2차원 dp를 0으로 채움
  for (let i = 0; i < land.length; i++) {
    const arr = new Array(4).fill(0);
    dp.push(arr);
  }
  // 첫 번째 행은 원래 land 배열 복사
  dp[0] = land[0];

  // 두 번째 행부터 다른 열에 존재하는 최대값 찾기
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        if (j !== k) {
          dp[i][j] = Math.max(dp[i][j], dp[i - 1][k] + land[i][j]);
        }
      }
    }
  }

  // dp에서 최대값 찾기
  for (let i = 0; i < dp.length; i++) {
    max = Math.max(...dp[i]);
  }
  return max;
}
