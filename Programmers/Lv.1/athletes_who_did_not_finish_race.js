// 해시를 사용하지 않은 방법
// 배열의 크기가 크다면 sort()하는 데에 시간이 오래 걸릴 것임.
function solution(participant, completion) {
  let result = "";
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      result = participant[i];
      break;
    }
  }
  return result;
}

// 해시를 사용한 방법
function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1); // a에 있다면 카운트 +1
    map.set(b, (map.get(b) || 0) - 1); // b에 있다면 카운트 -1
  }

  // v값이 0보다 크다면 완주하지 못한 선수임.
  for (let [k, v] of map) {
    if (v > 0) return k;
  }
}
