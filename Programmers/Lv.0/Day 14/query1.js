function solution(arr, queries) {
  return queries.reduce((acc, curr) => {
    const [s, e] = curr;
    for (let i = s; i < e + 1; i++) {
      acc[i] += 1;
    }
    return acc;
  }, arr);
}
