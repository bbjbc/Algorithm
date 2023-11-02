function solution(strArr) {
  const group = [];
  for (const str of strArr) {
    const length = str.length;
    if (!group[length]) {
      group[length] = 0;
    }
    group[length]++;
  }
  let max = 0;
  for (const size of group) {
    if (size > max) max = size;
  }
  return max;
}
