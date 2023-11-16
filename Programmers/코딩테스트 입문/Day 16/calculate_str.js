function solution(my_string) {
  const result = my_string.split(" ");
  return result.reduce((acc, curr, idx) => {
    if (curr === "+") return acc + Number(result[idx + 1]);
    else if (curr === "-") return acc - Number(result[idx + 1]);
    else return acc;
  }, Number(result[0]));
}
