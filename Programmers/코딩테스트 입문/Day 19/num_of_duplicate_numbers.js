function solution(array, n) {
  let result = 0;
  for (const a of array) {
    if (a === n) result++;
  }
  return result;
}
