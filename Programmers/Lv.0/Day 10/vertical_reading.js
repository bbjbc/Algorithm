function solution(my_string, m, c) {
  let result = "";
  for (let i = 0; i < Math.ceil(my_string.length) / m; i++) {
    result += [...my_string.slice(i * m, m + i * m)][c - 1];
  }
  return result;
}
