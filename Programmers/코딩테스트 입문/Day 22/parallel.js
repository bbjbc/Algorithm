function solution(dots) {
  const a = dots.sort((a, b) => a[0] - b[0]);
  return (a[0][1] - a[1][1]) / (a[0][0] - a[1][0]) ===
    (a[2][1] - a[3][1]) / (a[2][0] - a[3][0])
    ? 1
    : 0;
}
