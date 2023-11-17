function solution(n) {
  return [...String(n)].reduce((acc, curr) => +acc + +curr, 0);
}
