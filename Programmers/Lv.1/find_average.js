function solution(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr);
  return sum / arr.length;
}
