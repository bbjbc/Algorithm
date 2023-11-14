function solution(my_string) {
  return [...my_string]
    .filter((a) => Number.isInteger(+a))
    .map((a) => +a)
    .sort((a, b) => a - b);
}
