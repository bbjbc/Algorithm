function solution(a, d, included) {
  return included.reduce((accumlator, currentValue, index) => {
    if (currentValue) accumlator += a + index * d;
    return accumlator;
  }, 0);
}
