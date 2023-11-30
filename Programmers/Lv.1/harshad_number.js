function solution(x) {
  let sum = 0;
  const split = String(x)
    .split("")
    .map((a) => Number(a));
  for (const a of split) {
    sum += a;
  }
  return x % sum === 0 ? true : false;
}
