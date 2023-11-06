function solution(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Array(n).fill(0));
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i][i] = 1;
  }
  return arr;
}
