function solution(s) {
  const result = [];
  return [...s].map((a, idx) => {
    if (result[a] === undefined) {
      result[a] = idx;
      return -1;
    } else {
      const sub = idx - result[a];
      result[a] = idx;
      return sub;
    }
  });
}
