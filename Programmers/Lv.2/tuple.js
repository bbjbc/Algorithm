// {{2},{2,1},{2,1,3},{2,1,3,4}}
// 2},{2,1},{2,1,3},{2,1,3,4
// [ '2', '2,1', '2,1,3', '2,1,3,4' ]
// [ [ '2' ], [ '2', '1' ], [ '2', '1', '3' ], [ '2', '1', '3', '4' ] ]
// [ [ 2 ], [ 2, 1 ], [ 2, 1, 3 ], [ 2, 1, 3, 4 ] ]
// 길이 순으로 오름차순 정렬
// 요소 탐색하면서 없던 요소면 result에 삽입

function solution(s) {
  const result = [];

  s = s
    .slice(2, s.length - 2)
    .split("},{")
    .map((a) => a.split(","));
  s = s.map((a) => a.map((a) => +a));

  s.sort((a, b) => a.length - b.length);

  s.forEach((el) => {
    el.forEach((e) => {
      if (!result.includes(e)) {
        result.push(e);
      }
    });
  });

  return result;
}
