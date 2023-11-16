function solution(s1, s2) {
  let result = 0;
  for (const one of s1) {
    for (const two of s2) {
      if (one === two) result++;
    }
  }
  return result;
}
