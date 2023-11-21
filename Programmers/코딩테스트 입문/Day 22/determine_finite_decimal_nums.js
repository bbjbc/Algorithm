function divideNum(a, b) {
  let gcd = 0;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) gcd = i;
  }
  return gcd;
}

function solution(a, b) {
  const gcd = divideNum(a, b);
  let denominator = b / gcd;
  while (denominator % 2 === 0) {
    denominator /= 2;
  }
  while (denominator % 5 === 0) {
    denominator /= 5;
  }
  return denominator === 1 ? 1 : 2;
}
