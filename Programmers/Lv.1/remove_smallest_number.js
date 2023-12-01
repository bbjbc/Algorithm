function solution(arr) {
  if (arr.length > 1) {
    const min = Math.min(...arr);
    const filter = arr.filter((i) => i !== min);
    return filter;
  } else if (arr.length === 1) return [-1];
}
