// 정말 알다가도 모르겠는 sort()
// 맨 앞자리 수를 기준으로 정렬
// 다 붙이고 return

function solution(numbers) {
  let str = "";

  // tc 11번 - 모든 요소가 0일 경우
  if (numbers.every((n) => n === 0)) {
    return "0";
  }

  // 맨 앞자리 수를 기준으로 정렬
  numbers.sort((a, b) => {
    const A = a.toString();
    const B = b.toString();
    if (A + B > B + A) {
      return -1;
    } else if (A + B < B + A) {
      return 1;
    } else return 0;
  });

  for (let i = 0; i < numbers.length; i++) {
    str += numbers[i];
  }
  return str;
}

// 더 짧은 코드
function solution(numbers) {
  const answer = numbers
    .sort((a, b) => {
      a = a.toString();
      b = b.toString();
      return b + a - (a + b);
    })
    .join("");

  return answer[0] === "0" ? "0" : answer;
}

// sort() 부분이 신기한 코드 가져옴
function solution(numbers) {
  if (numbers.every((n) => n === 0)) {
    return "0";
  }
  const answer = numbers
    .map((v) => String(v))
    // string화된 값에 1을 곱해서 int 형으로 변환하여 어떤 값이 큰지 비교 정렬 (+(b+a) 이런 식으로도 작성 가능)
    .sort((a, b) => (b + a) * 1 - (a + b) * 1)
    .join("");
  return answer;
}
