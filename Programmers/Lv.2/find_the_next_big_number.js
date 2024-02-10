function solution(numbers) {
  const len = numbers.length;
  const result = new Array(len).fill(-1);
  const stk = [];
  // stk에 i 순서대로 인덱스 번호를 push
  // 현재 숫자가 stk에 저장된 숫자보다 크다면, 이전 stk에 저장된 숫자의 다음 큰 숫자는 현재 숫자임.
  // stk에서 그 index를 꺼내어 result에 할당시킴.
  for (let i = 0; i < len; i++) {
    while (stk.length && numbers[i] > numbers[stk[stk.length - 1]]) {
      const index = stk.pop();
      result[index] = numbers[i];
    }
    stk.push(i);
  }
  return result;
}

// 효율성 측면에서 매우 떨어지고 tc 4개 시간초과
// function solution(numbers) {
//   const len = numbers.length;
//   const result = new Array(len).fill(-1);
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (numbers[i] < numbers[j]) {
//         result[i] = numbers[j];
//         break;
//       }
//     }
//   }
//   return result;
// }
