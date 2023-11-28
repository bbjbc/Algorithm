function solution(N) {
  let sum = 0;
  const arr = String(N)
    .split("")
    .map((a) => Number(a));
  for (const a of arr) sum += a;
  return sum;
}
