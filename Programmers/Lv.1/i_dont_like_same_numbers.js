function solution(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i]) result.push(arr[i]);
  }
  return result;
}
