function solution(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result = LCM(result, arr[i]);
  }
  return result;
}

function LCM(num1, num2) {
  return (num1 * num2) / GCD(num1, num2);
}

function GCD(num1, num2) {
  if (num2 === 0) return num1;
  else return GCD(num2, num1 % num2);
}

// 많이 간단한 버전
// function solution(arr) {
//   return arr.reduce((num1, num2) => (num1 * num2) / GCD(num1, num2));
// }

// function GCD(num1, num2) {
//   return num1 % num2 ? GCD(num2, num1 % num2) : num2;
// }
