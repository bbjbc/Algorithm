function solution(n, m, section) {
  let answer = 0;
  let paint = 0;
  section.forEach((s) => {
    if (s > paint) {
      answer++;
      paint = s + m - 1;
    }
  });
  return answer;
}
