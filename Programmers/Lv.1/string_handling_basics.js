function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  for (let i = 0; i < s.length; i++) {
    if (isNaN(+s[i])) {
      return false;
    }
  }
  return true;
}

// // Number.isInteger(+s)
// // 숫자가 아닌 문자들이 나오면 +s의 결과로 NaN(Not a Number)가 나오게됨
// // Number(s)를 단순화 시킨셈

// 정규표현식 사용

// function solution(s) {
//     return /^\d{4}$|^\d{6}$/.test(s);
// }
// ^x - 시작문자 x
// \d - 숫자 0-9
// {숫자} - 반복횟수
// ^\d{4}$ 는 문자열이 4자리 숫자인지를 검사
// ^\d{6}$ 는 문자열이 6자리 숫자인지를 검사
