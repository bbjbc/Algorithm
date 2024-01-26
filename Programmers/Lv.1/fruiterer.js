// 리팩토링 후
function solution(k, m, score) {
  let result = 0;
  score.sort((a, b) => b - a);
  for (let i = 0; i < score.length; i += m) {
    const min = score[i + m - 1];
    if (min) {
      result += min * m;
    }
  }
  return result;
}

// 리팩토링 전
// function solution(k, m, score) {
//     let arr = []
//     let result = 0
//     score.sort((a,b)=>a-b)
//     if(score.length>m){
//         for(let i=score.length;i>0;i-=m){
//             arr.push(score.slice(i-m,i))
//         }
//         // console.log(arr)
//         for(let i=0;i<arr.length;i++){
//             if(arr[i].length===0) break
//             result += arr[i][0]*m
//         }
//     } else result=0
//     return result
// }
