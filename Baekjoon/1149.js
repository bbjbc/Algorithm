// 1. 동적계획법을 사용하여 문제 해결
// 2. 총 3개의 색깔이므로 3개의 열로 이루어진 dp 배열을 만듦.
// 3. 초기값을 설정해줌.
// 4. 이전 집의 색깔과 다른 색깔을 칠하는 비용을 더해줌.
// 5. 반복문이 끝난 후 계산된 dp 배열의 마지막 행에서 가장 작은 값을 찾아 출력함.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const dp = Array.from({ length: N }, () => Array(3).fill(0));
let answer = 0;

for (let i = 0; i < N; i++) {
  arr[i] = arr[i].split(" ").map(Number);
}

dp[0][0] = arr[0][0];
dp[0][1] = arr[0][1];
dp[0][2] = arr[0][2];

for (let i = 1; i < N; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + arr[i][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + arr[i][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + arr[i][2];
}

answer = Math.min(dp[N - 1][0], dp[N - 1][1], dp[N - 1][2]);
console.log(answer);
