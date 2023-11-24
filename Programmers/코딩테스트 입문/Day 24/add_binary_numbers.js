function solution(bin1, bin2) {
  let tenSum = parseInt(bin1, 2) + parseInt(bin2, 2); // 2진수를 10진수로 변환하여 덧셈
  let result = tenSum.toString(2); // 10진수를 2진수로 변환
  return result;
}
