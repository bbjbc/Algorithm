function solution(num, total) {
  const firstValue = (num, total) => {
    if (num % 2 === 0) return Math.ceil(total / num) - num / 2;
    else return total / num - Math.floor(num / 2);
  };
  const result = Array(num)
    .fill(firstValue(num, total))
    .map((a, idx) => a + idx);
  return result;
}
