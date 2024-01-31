// 시간이 오래 걸림
// 굳이 count를 안구해도 되긴 한듯? 어차피 내림차순이라 (index번호+1)인 셈이니까.
function solution(citations) {
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    const count = citations.filter((c) => c >= citations[i]).length;
    if (citations[i] <= count) return Math.max(citations[i], i);
  }
  return citations.length;
}

// 시간이 덜 걸림
// function solution(citations) {
//   citations.sort((a, b) => b - a);
//   for (let i = 0; i < citations.length; i++) {
//     if (citations[i] <= i + 1) {
//       return Math.max(citations[i], i);
//     }
//   }
//   return citations.length;
// }

// https://en.wikipedia.org/wiki/H-index 공식 참조해서 했는데
// 프로그래머스에서 문제를 이상하게 만들었다고 한다.
// 이상한 문제라고 하는 사람들이 몇몇 있었음.
