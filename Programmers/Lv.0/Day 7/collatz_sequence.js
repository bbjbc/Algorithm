function solution(n) {
  const result = [];
  const isOdd = (x) => x % 2 === 1;
  const isEven = (x) => x % 2 === 0;

  while (n > 0) {
    result.push(n);
    if (n === 1) break;

    if (isEven(n)) {
      n /= 2;
    } else if (isOdd(n)) {
      n = 3 * n + 1;
    }
  }
  return result;
}
