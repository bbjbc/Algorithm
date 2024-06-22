// 1. dfs를 이용한 풀이임.
// 2. computers 배열을 순회하면서 연결된 컴퓨터를 찾아서 방문 처리함. → 1로 표시된 컴퓨터는 연결되어 있음.
// 3. 방문하지 않은 컴퓨터가 있으면 dfs를 호출하고, answer를 증가시킴.
// 4. 모든 컴퓨터를 방문하면 answer를 반환함.

function solution(n, computers) {
  let answer = 0;
  let visited = Array.from({ length: n }, () => false);

  const dfs = (start) => {
    visited[start] = true;

    for (let i = 0; i < n; i++) {
      if (computers[start][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
); // 2
