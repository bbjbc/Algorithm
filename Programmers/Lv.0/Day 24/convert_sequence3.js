function solution(arr, k) {
  if (k % 2 === 1) {
    return arr.map((i) => i * k);
  } else return arr.map((i) => i + k);
}
