function solution(n) {
  const result = [];
  let a = 2;
  while (a <= n) {
    if (n % a === 0) {
      result.push(a);
      n /= a;
    } else a++;
  }
  return [...new Set(result)];
}
