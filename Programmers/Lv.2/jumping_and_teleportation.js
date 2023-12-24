function solution(n) {
  let gun = 0;
  while (n !== 0) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n -= 1;
      gun += 1;
    }
  }
  return gun;
}
