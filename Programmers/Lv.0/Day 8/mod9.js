function solution(number) {
  return [...number].reduce((acc, curr) => {
    const sum = (acc += curr);
    return sum % 9;
  }, 0);
}
