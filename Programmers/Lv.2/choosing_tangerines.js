// 귤의 개수 크기 별로 카운팅해서 객체에 삽입
// 객체의 value값을 내림차순으로 정렬
// k를 value값을 빼면서 카운트
// k가 0이하가 되면 종료

function solution(k, tangerine) {
  let result = 0;
  const tangerineCount = {};

  tangerine.forEach((t) => {
    tangerineCount[t] = (tangerineCount[t] || 0) + 1;
  });

  const sorting = Object.values(tangerineCount).sort((a, b) => b - a);

  for (let s of sorting) {
    k -= s;
    result++;
    if (k <= 0) break;
  }

  return result;
}
