// 에라토스테네스의 체 사용
function solution(n) {
  let count = 0;
  const arr = Array(n - 1)
    .fill(0)
    .map((_, idx) => idx + 2);
  for (let i = 2; i <= n; i++) {
    if (arr[i] === 0) continue;
    for (let j = i * 2; j <= n; j += i) {
      arr[j] = 0;
    }
  }
  for (let i = 2; i <= n; i++) {
    if (arr[i] !== 0) count += 1;
  }
  return count;
}

// 테스트케이스는 통과하지만 시간초과로 효율성 탈락
// function solution(n) {
//     let count = 0
//     const arr = Array(n-1).fill(0).map((_,idx)=>idx+2)
//     const result = []
//     for(const a of arr){
//         let s = true
//         for(let i=2;i<=Math.sqrt(a);i++){
//             if(a%i===0) s=false
//         }
//         if(s) result.push(a)
//     }
//     return result.length
// }
