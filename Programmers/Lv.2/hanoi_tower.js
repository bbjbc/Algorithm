function solution(n) {
  return hanoi(n, 1, 2, 3);
}

function hanoi(n, from, sub, to) {
  let result = [];
  if (n === 1) return [[from, to]];
  result = result.concat(hanoi(n - 1, from, to, sub));
  result.push([from, to]);
  result = result.concat(hanoi(n - 1, sub, from, to));
  return result;
}
