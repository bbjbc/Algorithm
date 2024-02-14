function solution(s) {
  s = [...s];
  let result = 0;
  let trueCount = 0,
    falseCount = 0;
  let sameChar = "";

  s.forEach((char) => {
    if (sameChar === "") {
      trueCount++;
      sameChar = char;
    } else if (sameChar === char) {
      trueCount++;
    } else {
      falseCount++;
    }

    if (trueCount === falseCount) {
      result++;
      trueCount = 0;
      falseCount = 0;
      sameChar = "";
    }
  });

  // 예시 2번과 같이 a가 남는 경우
  if (trueCount !== 0 || falseCount !== 0) {
    result++;
  }

  return result;
}
