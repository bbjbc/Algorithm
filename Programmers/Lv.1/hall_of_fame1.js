function solution(k, score) {
  let arr = [];
  let answer = [];
  for (let i = 0; i < score.length; i++) {
    arr.push(score[i]);
    arr.sort((a, b) => a - b);
    if (arr.length > k) {
      if (score[i] > arr[0]) {
        arr.shift();
      } else {
        arr.shift();
      }
    }
    answer.push(arr[0]);
  }
  return answer;
}
