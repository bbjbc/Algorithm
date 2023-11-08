function solution(n) {
  let x = 1;
  while (true) {
    if (n % x === 1) break;
    else x++;
  }
  return x;
}
