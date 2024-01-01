function solution(n) {
  let result = n + 1;
  const counting = n
    .toString(2)
    .split("")
    .filter((a) => a === "1").length;
  while (result > n) {
    const res = result
      .toString(2)
      .split("")
      .filter((a) => a === "1").length;
    if (counting === res) {
      break;
    }
    result++;
  }
  return result;
}
