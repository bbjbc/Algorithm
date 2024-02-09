function solution(n, k) {
  let answer = 0;
  // k진수로 변환 → 0 기준으로 나눔 → 숫자화 → 조건에 따른 필터링
  const convert = n
    .toString(k)
    .split("0")
    .map(Number)
    .filter((c) => c !== 1 && c !== 0);

  convert.forEach((number) => {
    answer += isPrime(number) ? 1 : 0;
  });
  return answer;
}

function isPrime(number) {
  if (!number || number === 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// function solution(n, k) {
//   let answer = 0;
//   const convert = n
//     .toString(k)
//     .split("0")
//     .map(Number)
//     .filter((c) => c !== 1 && c !== 0);

//   convert.forEach((number) => {
//     let isPrime = false;
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         isPrime = true;
//       }
//     }
//     answer += isPrime ? 0 : 1;
//   });
//   return answer;
// }
