function solution(my_str, n) {
  const result = [];
  let count = 0;
  for (let i = count; i < my_str.length; i = count) {
    result.push(my_str.substring(count, n));
    count += n;
  }
  return result;
}
