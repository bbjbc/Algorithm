function solution(sides) {
  const min = Math.min(...sides);
  return 2 * min - 1;
}

// 1. 주어진 변 중 가장 긴 변이 있음(a,b) => b<a+x => b-a<x
// 2. 모르는 변이 가장 긴 변임(x) => x<a+b
// 결국, b-a<x<a+b
// x의 개수는 2a-1임

// function solution(sides) {
//     let min = Math.min(...sides)
//     let max = Math.max(...sides)
//     let result = 0
//     for(let i=0;i<min+max;i++){
//         let arr = [min,max,i].sort((a,b)=>a-b)
//         let [q,w,e] = arr
//         if(q+w>e) result++
//     }
//     return result
// }
