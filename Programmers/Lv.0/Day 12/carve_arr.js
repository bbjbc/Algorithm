function solution(arr, query) {
  let result = arr;
  for (let i = 0; i < query.length; i++) {
    if (i % 2 === 0) {
      result = result.slice(0, query[i] + 1);
    } else {
      result = result.slice(query[i]);
    }
  }
  return result;
}
