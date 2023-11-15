function solution(s) {
  let sum = 0;
  const spliter = s.split(" ");
  for (let i = 0; i < spliter.length; i++) {
    if (Number.isInteger(+spliter[i])) {
      sum += +spliter[i];
    }
    if (spliter[i] === "Z") {
      sum -= Number(spliter[i - 1]);
    }
  }
  return sum;
}

// 스택을 이용한 방법도 있구나 !
// function solution(s){
//   const result = []
//   s.split(' ').forEach(a=>{
//     if(a==='Z') result.pop()
//     else result.push(+a)
//   })
//   return result.length ? result.reduce((acc,curr)=>acc+curr) : 0
// }
