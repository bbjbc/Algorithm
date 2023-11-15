function solution(array, n) {
  const result = [];
  const closestArr = [];
  let minDiff = Infinity;
  for (const a of array) {
    let diff = Math.abs(a - n);
    result.push(diff);
    if (diff < minDiff) minDiff = diff;
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] === minDiff) {
      closestArr.push(array[i]);
    }
  }
  return Math.min(...closestArr);
}

// sort()를 이용해서도 짧은 코드 안에 끝낼 수 있구나
// function solution(array, n){
//     array.sort((a,b)=>Math.abs(a-n) - Math.abs(b-n) || a-b)
//     return array[0]
// }
