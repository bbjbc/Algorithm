function solution(num_list) {
  let isOdd = [...num_list].filter((a) => a % 2 === 1);
  let isEven = [...num_list].filter((a) => a % 2 === 0);
  return Number(isOdd.join("")) + Number(isEven.join(""));
}
