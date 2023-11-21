function solution(lines) {
  let result = 0;
  const obj = {};

  for (const line of lines) {
    const [start, end] = line;
    obj[start] = obj[start] ? obj[start] + 1 : 1;
    obj[end] = obj[end] ? obj[end] - 1 : -1;
  }
  let prev = 0;
  let overlaps = 0;
  const sortedObj = Object.keys(obj).sort((a, b) => a - b);
  for (const sort of sortedObj) {
    if (prev !== 0 && overlaps >= 2) {
      result += Number(sort) - Number(prev);
    }
    overlaps += obj[sort];
    prev = sort;
  }
  return result;
}
