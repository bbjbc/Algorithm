function solution(arr, intervals) {
  const [a, b] = intervals;
  const [a1, b1] = a;
  const [a2, b2] = b;
  return [...arr.slice(a1, b1 + 1), ...arr.slice(a2, b2 + 1)];
}
