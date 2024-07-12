// 1. 먼저, 그래프를 만들어줌. → 각 노드에 대한 간선 정보를 저장함.
// 2. dfs와 bfs 함수를 만들어줌.
// 3. 숫자가 작은 노드부터 방문하므로, 간선 정보를 오름차순으로 정렬함.
// 4. dfs 함수를 통해 시작 노드부터 탐색하고, bfs 함수를 통해 시작 노드부터 탐색함.
// 5. dfs와 bfs 함수를 호출하고, 결과값을 출력 요구사항에 맞게 출력함.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M, V] = input[0].split(" ").map(Number);
const arr = input.slice(1);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
  const [a, b] = arr[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

function dfs(start) {
  const visited = Array(N + 1).fill(false);
  const result = [];

  function _dfs(v) {
    if (visited[v]) return;
    visited[v] = true;
    result.push(v);

    for (let next of graph[v]) {
      if (!visited[next]) {
        _dfs(next);
      }
    }
  }

  _dfs(start);
  return result;
}

function bfs(start) {
  const visited = Array(N + 1).fill(false);
  const result = [];
  const queue = [start];
  visited[start] = true;

  while (queue.length) {
    const node = queue.shift();
    result.push(node);

    for (let next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }

  return result;
}

console.log(dfs(V).join(" "));
console.log(bfs(V).join(" "));
