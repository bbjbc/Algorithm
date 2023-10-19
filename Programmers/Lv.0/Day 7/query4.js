function solution(arr, queries) {
  return queries.reduce((acc, curr) => {
    let [s, e, k] = curr;
    let array = [...acc];
    return array.map((a, i) => {
      if (s <= i && i <= e) {
        if (i % k === 0) return a + 1;
      }
      return a;
    });
  }, arr);
}
