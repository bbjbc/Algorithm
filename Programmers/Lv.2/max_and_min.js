function solution(s) {
  const a = s.split(" ");
  return Math.min(...a) + " " + Math.max(...a);
}
