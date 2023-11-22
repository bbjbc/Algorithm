function solution(score) {
  const result = [];
  const ranking = [];
  for (const arr of score) {
    const [eng, math] = arr;
    const avg = (eng + math) / 2;
    result.push(avg);
  }
  const sortedNum = result.slice().sort((a, b) => b - a); // slice()는 원래의 인덱스 넘버 유지
  // console.log(sortedNum)
  for (const res of result) {
    let rank = sortedNum.indexOf(res) + 1;
    if (res === 0) rank = sortedNum.length;
    ranking.push(rank);
  }
  return ranking;
}
