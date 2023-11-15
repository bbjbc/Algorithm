function solution(order) {
  let count = 0;
  const result = [...String(order)].map((a) => {
    if (a === "3") count++;
    if (a === "6") count++;
    if (a === "9") count++;
    return count;
  });
  return Math.max(...result);
}

// 정규표현식을 사용하여 기발하게 간단하게 풀 수 있음;;
// function solution(order) {
//     return String(order).split(/[3|6|9]/).length-1
// }
