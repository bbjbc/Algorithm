function solution(binomial) {
  const filter = binomial.split(" ");
  const a = parseInt(filter[0]);
  const b = parseInt(filter[2]);
  const op = filter[1];

  if (op === "+") {
    return a + b;
  } else if (op === "*") {
    return a * b;
  } else if (op === "-") {
    return a - b;
  }
}

// function solution(binomial){
//     return eval(binomial);
// }
// 주어진 binomial 문자열을 평가
