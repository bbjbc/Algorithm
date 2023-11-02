function solution(arr, n) {
  if (arr.length % 2 === 1) {
    return arr.map((a, idx) => (idx % 2 === 0 ? a + n : a));
  } else if (arr.length % 2 === 0) {
    return arr.map((a, idx) => (idx % 2 === 1 ? a + n : a));
  }
}
