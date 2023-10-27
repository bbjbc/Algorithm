function solution(num_list) {
  const isOdd = num_list
    .filter((e, i) => i % 2 === 1)
    .reduce((acc, curr) => acc + curr, 0);
  const isEven = num_list
    .filter((e, i) => i % 2 === 0)
    .reduce((acc, curr) => acc + curr, 0);
  return Math.max(isOdd, isEven);
}
