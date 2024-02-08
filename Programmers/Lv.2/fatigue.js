// ⓐ 이해하기 꽤나 복잡함
function solution(k, dungeons) {
  return dfs(k, dungeons, 0);
}

function dfs(k, dungeons, count) {
  let answer = count;
  for (let i = 0; i < dungeons.length; i++) {
    // 모든 던전에 대한 반복
    const [request, using] = dungeons[i]; // 현재 던전의 자원 가져오기
    if (!request || request > k) continue; // 자원이 없거나 현재 자원보다 많이 요구하면 건너뜀

    const copy = dungeons.map((d, index) => (index === i ? [null, null] : d)); // 선택된 던전만 [null, null]로 표시
    const result = dfs(k - using, copy, count + 1); // dfs 결과 저장
    answer = Math.max(result, answer); // 결과 값 중 최대값을 저장
  }
  return answer;
}

// ⓑ 가독성 좋고 이해 쉬움
function solution(k, dungeons) {
  const visited = new Array(dungeons.length).fill(0);
  let answer = 0;

  function dfs(k, count) {
    answer = Math.max(count, answer);

    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && k >= dungeons[i][0]) {
        visited[i] = 1;
        dfs(k - dungeons[i][1], count + 1);
        visited[i] = 0;
      }
    }
  }
  dfs(k, 0);
  return answer;
}

// [ [ null, null ], [ 50, 40 ], [ 30, 10 ] ]
// [ [ null, null ], [ null, null ], [ 30, 10 ] ]
// 2
// [ [ null, null ], [ 50, 40 ], [ null, null ] ]
// [ [ null, null ], [ null, null ], [ null, null ] ]
// 3
// 3
// 3
// [ [ 80, 20 ], [ null, null ], [ 30, 10 ] ]
// [ [ 80, 20 ], [ null, null ], [ null, null ] ]
// 2
// 2
// [ [ 80, 20 ], [ 50, 40 ], [ null, null ] ]
// [ [ 80, 20 ], [ null, null ], [ null, null ] ]
// 2
// 2
