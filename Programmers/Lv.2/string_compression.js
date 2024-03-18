// 문자열을 1개부터 n개까지 자름.
// 자른 문자열을 비교하여 같은 문자열이 나오면 count를 증가시킴.
// 다른 문자열이 나오면 count와 문자열을 합쳐서 새로운 문자열을 만듦.
// 마지막까지 count가 2이상이면 count와 문자열을 합쳐서 새로운 문자열을 만듦.
// 문자열의 길이를 비교하여 가장 짧은 문자열의 길이를 반환.
// (추가-매우 중요) 문자열을 자르는 방법은 1부터 문자열의 길이의 절반까지 자름. → 문자열의 길이의 절반까지 자르는 이유는 문자열의 길이의 절반 이상은 압축이 불가능하기 때문.

function solution(s) {
  let result = s.length;

  for (let i = 1; i <= s.length / 2; i++) {
    let compressionStr = "";
    let prev = s.slice(0, i);
    let count = 1;

    for (let j = i; j < s.length; j += i) {
      let current = s.slice(j, j + i);
      if (prev === current) {
        count++;
      } else {
        compressionStr += count >= 2 ? count + prev : prev;
        prev = current;
        count = 1;
      }
    }

    compressionStr += count >= 2 ? count + prev : prev;
    result = Math.min(result, compressionStr.length);
  }

  return result;
}
