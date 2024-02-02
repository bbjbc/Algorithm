function solution(n, left, right) {
  const result = [];
  for (let i = left; i <= right; i++) {
    const row = Math.floor(i / n);
    const col = i % n;
    result.push(Math.max(row + 1, col + 1));
  }
  return result;
}
// 1 2 3
// 4 5 6
// 7 8 9
//일 때 행은 i를 n으로 나눈 몫이고, 열은 i를 n으로 나눴을 때 나머지를 의미함.

// i=2 row=0 col=2
// i=3 row=1 col=0
// i=4 row=1 col=1
// i=5 row=1 col=2

// 메모리 초과 오류 발생

// function solution(n, left, right) {
//     const arr = []
//     for(let i=0;i<n;i++){
//         const row = []
//         for(let j=0;j<n;j++){
//             row.push(Math.max(i+1,j+1))
//         }
//         arr.push(row)
//     }
//     // 이차원 배열 → 일차원 배열 방법
//     // ⓐ const arr2 = [].concat(...arr)
//     // ⓑ const arr2 = arr.flat() // flat() 메서드는 시간이 굉장히 오래 걸림.
//     // ⓒ const arr2 = arr.reduce((prev,next)=>prev.concat(next))
//     const result = [].concat(...arr).slice(left,right+1)
//     return result
// }

// 메모리 초과 오류가 발생하는 이유? - (signal: aborted (core dumped))
// 메모리가 부족한 상태에서 push()로 너무 큰 행렬을 만들려다 초과남.
// 행렬의 한 줄인 n의 최대값이 10^7이고 행렬 전체는 n제곱이므로 10^14 크기임.
// 행렬의 각 요소가 한바이트씩만 소비한다고 해도 행렬을 만드는데 필요한 메모리는 100 테라바이트임.
// 메모리가 부족한 것이 당연함.
