function solution(n, arr1, arr2) {
  const arr = [];
  const a = arr1.map((a1) => parseInt(a1.toString(2), 2));
  const b = arr2.map((a2) => parseInt(a2.toString(2), 2));
  for (let i = 0; i < a.length; i++) {
    arr.push((a[i] | b[i]).toString(2).padStart(n, "0"));
    // padStart() 메서드는 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환합니다.
    // 채워넣기는 대상 문자열의 시작(좌측)부터 적용됩니다.
  }
  const answer = arr.map((a) => a.replaceAll("1", "#").replaceAll("0", " "));
  // const answer = arr.map((a) => a.replace(/1/g, "#").replace(/0/g, " "))
  // 정규 표현식을 사용할 수도 있음.
  return answer;
}
