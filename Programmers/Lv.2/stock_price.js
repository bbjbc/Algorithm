function solution(prices) {
  const result = [];
  const len = prices.length;
  for (let i = 0; i < len; i++) {
    let sec = 0;
    for (let j = i + 1; j < len; j++) {
      sec++;
      // 가격이 떨어진 것이므로 바로 종료
      if (prices[i] > prices[j]) {
        break;
      }
    }
    result.push(sec);
  }
  return result;
}
