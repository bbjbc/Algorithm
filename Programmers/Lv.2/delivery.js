// graph를 초기화함. (graph는 마을과 마을 사이의 길에 대한 정보를 담고 있음)
// distance는 각 마을까지의 최단 거리를 담고 있음.
// queue는 bfs를 위한 queue임.
// 각 마을에서 길에 대한 cost 표현
// graph를 돌면서 각 마을까지의 최단 거리를 구함.
// 최단 거리가 K보다 작거나 같으면 추가함.

function solution(N, road, K) {
  let answer = 0;
  const graph = Array.from({ length: N + 1 }, () => Array()); // graph 초기화
  const distance = Array.from({ length: N + 1 }, () => Infinity); // 각 마을까지의 최단 거리 distance 초기화
  const queue = []; // BFS를 위한 queue 초기화

  // 각 마을에서 길에 대한 cost 표현
  road.forEach((r) => {
    let [a, b, c] = r;
    graph[b].push({ end: a, cost: c }); // 양방향 그래프이므로 양쪽으로 추가
    graph[a].push({ end: b, cost: c });
  });

  queue.push(1); // 1번 마을부터 시작
  distance[1] = 0; // 출발 지점까지의 거리는 0

  // BFS 탐색 시작
  while (queue.length) {
    const currentVillage = queue.shift();

    // 현재 마을과 연결된 마을들을 탐색
    for (let i = 0; i < graph[currentVillage].length; i++) {
      const nextVillage = graph[currentVillage][i].end;
      const nextVillageCost = graph[currentVillage][i].cost;

      // 최단 거리 갱신
      if (distance[nextVillage] > distance[currentVillage] + nextVillageCost) {
        distance[nextVillage] = distance[currentVillage] + nextVillageCost;
        queue.push(nextVillage);
      }
    }
  }

  // 출발 지점으로부터 각 마을까지의 최단 거리 확인
  for (let i = 1; i <= N; i++) {
    answer += distance[i] > K ? 0 : 1; // 주어진 한계값 K 이하인 마을의 수 측정
  }
  return answer;
}

console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
);
