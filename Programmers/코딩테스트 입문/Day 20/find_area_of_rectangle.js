function solution(dots) {
  const dot = dots.sort((a, b) => a[0] - b[0]);
  return Math.abs(dot[0][1] - dot[1][1]) * Math.abs(dot[1][0] - dot[2][0]);
}

// 이렇게도 가능

// function solution(dots) {
//   let x = [],
//       y = [];

//   for (let pos of dots) {
//       x.push(pos[0]);
//       y.push(pos[1]);
//   }

//   return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
// }
