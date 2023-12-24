// DP 사용
function solution(n) {
  let first = 0,
    second = 1,
    goal = 0;
  for (let i = 2; i <= n; i++) {
    goal = (first + second) % 1234567;
    first = second;
    second = goal;
  }
  return goal;
}

// 재귀 런타임에러, 시간 초과
// function solution(n) {
//     const c = 1234567
//     return fibonacci(n) % c
// }

// function fibonacci(n){
//     if(n<=1) return n
//     else return fibonacci(n-1) + fibonacci(n-2)
// }
