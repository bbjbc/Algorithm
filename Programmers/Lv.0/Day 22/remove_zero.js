function solution(n_str) {
  let zeroIndex = 0;
  while (zeroIndex < n_str.length && n_str[zeroIndex] === "0") zeroIndex++;
  return n_str.slice(zeroIndex);
}
