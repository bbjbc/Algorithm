// 숫자를 이어붙여 소수인지 판단하기 위해서는 완전 탐색
// 최단 경로를 따지는게 아닌 모든 경로를 살펴 탐색 - dfs
// dfs 함수에서 판단할 때 소수이면 set에 추가해줌.
// arr이 아닌 set으로 하는 이유는 중복을 없애기 위함.
// 방문한 곳이면 1로 바꾸고 numbers의 한 자리씩 이어붙이며 depth+1 해줌.
// 또 다른 곳 탐색할 때를 위해 방문했던 곳은 다시 0으로 바꿈.
// set의 크기 return

function solution(numbers) {
  const visited = new Array(numbers.length).fill(0);
  const set = new Set();

  const dfs = (num, depth) => {
    if (isPrime(parseInt(num)) && depth > 0) {
      set.add(parseInt(num));
    }

    for (let i = 0; i < numbers.length; i++) {
      if (!visited[i]) {
        visited[i] = 1;
        dfs(num + numbers[i], depth + 1);
        visited[i] = 0;
      }
    }
  };

  dfs("", 0);

  return set.size;
}

function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}
