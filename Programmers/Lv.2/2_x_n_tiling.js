// dp 사용하면 끝.
// 보통 base case의 존재와 경우의 수를 물으면 dp를 사용하면 되는 듯.

function solution(n) {
  const dp = new Array(n + 1).fill(-1);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }
  return dp[n];
}