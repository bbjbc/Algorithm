function solution(num_str) {
  return [...num_str].reduce((acc, curr, idx) => {
    acc += parseInt(curr);
    return acc;
  }, 0);
}
