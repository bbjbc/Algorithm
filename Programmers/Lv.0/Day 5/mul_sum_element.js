function solution(num_list) {
  const multiply = [...num_list].reduce((acc, curr) => {
    return acc * curr;
  }, 1);
  const sum = [...num_list].reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return multiply < sum * sum ? 1 : 0;
}
