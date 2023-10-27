function solution(arr) {
  let x = 0;
  while (true) {
    const result = arr.map((a) => {
      if (a >= 50 && a % 2 === 0) {
        return a / 2;
      } else if (a < 50 && a % 2 === 1) {
        return a * 2 + 1;
      }
      return a;
    });
    const isEqual = arr.every((a, idx) => a === result[idx]);

    if (isEqual) break;
    x++;
    arr = result;
  }
  return x;
}
