function solution(numbers, n) {
  return numbers.reduce((acc, curr) => (n >= acc ? acc + curr : acc));
}
