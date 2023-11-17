function solution(array, height) {
  let result = 0;
  for (const a of array) {
    if (a > height) result++;
  }
  return result;
}
