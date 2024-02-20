// 순위 매긴 배열 선언
// lottos의 요소가 0이라면 일단 넘겨
// 0이 아니고 win_nums에 요소가 존재하면 count 올려
// filter를 통해서 0의 길이 측정해
// 최대는 count+0의 길이 / 최소는 count 에 따른 rank 매겨

// 좀 투머치 코드임.
function solution(lottos, win_nums) {
  let count = 0;
  const rank = [6, 6, 5, 4, 3, 2, 1];

  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) {
      continue;
    } else {
      if (win_nums.includes(lottos[i])) {
        count++;
      }
    }
  }
  const a = lottos.filter((l) => l === 0).length;
  return [rank[count + a], rank[count]];
}

// 간결한 코드
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  let zeroCount = lottos.filter((a) => a === 0).length;
  let minCount = lottos.filter((a) => win_nums.includes(a)).length;

  return [rank[zeroCount + minCount], rank[minCount]];
}
