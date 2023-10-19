function solution(l, r) {
  let arr = [];
  for (let num = l; num <= r; num++) {
    if (num % 5 === 0) {
      if ([...num.toString()].every((i) => i === "0" || i === "5")) {
        arr.push(num);
      }
    }
  }
  return arr.length ? arr : [-1];
}
// every() - 배열의 모든 요소가 제공된 함수로 구현된 테스트를 통과하는지 테스트합니다
