function solution(n) {
  const result = [];
  while (n > 0) {
    if (n % 2 === 1) result.push(n);
    n--;
  }
  return result.sort((a, b) => a - b);
}
