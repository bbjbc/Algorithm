function solution(before, after) {
  const bef = before.split("").sort();
  const aft = after.split("").sort();
  return JSON.stringify(bef) === JSON.stringify(aft) ? 1 : 0;
}
