// 입력이 빈 문자열인 경우, 빈 문자열을 반환.
// 균형잡힌 괄호 문자열인지 확인함.
// u와 v를 분리함.
// 올바른 괄호 문자열이면 재귀 on
// 올바른 괄호 문자열이 아니라면 주어진 규칙대로 수행.

function solution(p) {
  if (!p) return p; // 1단계
  let u = ""; // 2단계
  let v = ""; // 2단계
  let left = 0;
  let right = 0;

  // 균형잡힌 괄호 문자열 확인
  for (let i = 0; i < p.length; i++) {
    p[i] === "(" ? left++ : right++;
    if (left === right) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1);
      break;
    }
  }

  // 올바른 괄호 문자열 확인
  if (u[0] === "(") {
    return u + solution(v);
  } else {
    let str = "";
    str += "(" + solution(v) + ")";
    u = u
      .slice(1, u.length - 1)
      .replace(/\(|\)/g, (a) => (a === "(" ? ")" : "("));
    return str + u;
  }
}

console.log(solution("(()())()"));
console.log(solution(")("));
