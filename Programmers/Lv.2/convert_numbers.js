// bfs로 해도 시간초과 났음
// dp로 변경
// dp 배열 infinity로 채워주고 base case 선언
// x~y까지 infinity가 아닌 곳에 rule을 적용시켜 카운트 증가
// 최종 dp[y]가 infinity면 만들 수 없는 것임.

function solution(x, y, n) {
  if (x === y) return 0;
  let dp = new Array(y + 1).fill(Infinity);
  dp[x] = 0; // base case

  for (let i = x; i <= y; i++) {
    let rules = [i * 2, i * 3, i + n];
    if (dp[i] !== Infinity) {
      for (let rule of rules) {
        if (rule <= y) {
          dp[rule] = Math.min(dp[rule], dp[i] + 1);
        }
      }
    }
  }
  return dp[y] !== Infinity ? dp[y] : -1;
}

// 완전 탐색을 통해서 같아지면 count 반환
// 방문 숫자 저장하는 Set()
// bfs를 위한 배열 queue
// rules를 거치면서 값이 없다면 추가해줌
// number와 목표값 y가 같아지면 return

// bfs 풀이 - TC 9, 10에서 시간 초과 발생
function solution(x, y, n) {
  if (x === y) return 0;
  let visited = new Set();
  let queue = [{ number: x, count: 0 }]; // 변수 x와 count

  while (queue.length > 0) {
    let { number, count } = queue.shift();
    if (number === y) return count;

    let rules = [number * 2, number * 3, number + n];

    for (let rule of rules) {
      if (rule <= y && !visited.has(rule)) {
        visited.add(rule);
        queue.push({ number: rule, count: count + 1 });
      }
    }
  }
  return -1;
}
