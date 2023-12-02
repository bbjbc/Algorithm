function solution(left, right) {
  let n = 1;
  let count = 0;
  let arr = [];
  let num = [];
  let sum = 0;
  for (let i = left; i <= right; i++) {
    num.push(i);
    while (n <= i) {
      if (i % n === 0) {
        count++;
      }
      n++;
    }
    arr.push(count);
    count = 0;
    n = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) sum += num[i];
    else sum -= num[i];
  }
  return sum;
}

// 제곱근이 정수면 약수의 개수는 홀수다..
// function solution(left, right) {
//     var answer = 0;
//     for (let i = left; i <= right; i++) {
//         if (Number.isInteger(Math.sqrt(i))) {
//             answer -= i;
//         } else {
//             answer += i;
//         }
//     }
//     return answer;
// }
