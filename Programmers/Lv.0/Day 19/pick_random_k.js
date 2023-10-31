function solution(arr, k) {
  const result = [];
  const usedNum = {};

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (usedNum[num] === undefined) {
      result.push(num);
      usedNum[num] = true;
      if (result.length === k) {
        return result;
      }
    }
  }
  while (result.length < k) {
    result.push(-1);
  }
  return result;
}
