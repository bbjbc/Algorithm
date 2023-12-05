function solution(n) {
  const three = n.toString(3); // 10진법을 3진법으로 바꾸기
  const a = [...String(three)].reverse().join("");
  return parseInt(a, 3); // 3진법을 10진법으로 바꾸기
}
