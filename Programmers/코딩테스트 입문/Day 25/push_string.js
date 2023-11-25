function solution(A, B) {
  let result = 0;
  const a = A.split("");
  const b = B.split("");

  for (let i = 0; i < A.length; i++) {
    if (a === b) return 0;

    if (a.join("") === B) {
      break;
    } else if (a.join("") !== B) {
      a.unshift(a.pop());
      result++;
    }

    if (result === a.length) result = -1;
  }
  return result;
}
