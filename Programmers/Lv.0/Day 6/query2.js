function solution(arr, queries) {
  return queries.reduce((acc, curr) => {
    let [s, e, k] = curr;
    let resultAnswer = arr.slice(s, e + 1);
    let filter = resultAnswer.filter((a) => a > k);
    if (!filter.length) return [...acc, -1];
    return [...acc, Math.min(...filter)];
  }, []);
}
