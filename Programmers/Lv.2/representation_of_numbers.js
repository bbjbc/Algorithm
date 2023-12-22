function solution(n) {
  let count = 0;
  let start = 1;

  while (start <= n) {
    let sum = 0;
    let k = start;

    while (sum < n) {
      sum += k;
      k++;
    }
    if (sum === n) {
      count++;
    }

    start++;
  }

  return count;
}
