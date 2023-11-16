function solution(n) {
  let i = 1;
  const result = [];
  while (i <= n) {
    if (n % i === 0) result.push(i);
    i++;
  }
  return result.sort((a, b) => a - b);
}
