function solution(arr, idx) {
  for (let i = idx; i < arr.length; i++) {
    const result = arr[i];
    if (result === 1) return i;
  }
  return -1;
}
