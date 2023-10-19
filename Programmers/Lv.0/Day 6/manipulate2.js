function solution(numLog) {
  let control = "";
  for (let i = 1; i < numLog.length; i++) {
    let sub = numLog[i] - numLog[i - 1];
    if (sub === 1) {
      control += "w";
    } else if (sub === -1) {
      control += "s";
    } else if (sub === 10) {
      control += "d";
    } else if (sub === -10) {
      control += "a";
    }
  }
  return control;
} // 시간이 너무 오래 걸림

// 객체를 활용해서 풀 수도 있구나
// function solution(numLog) {
//     const convert = {
//         '1': 'w', '-1': 's', '10': 'd', '-10': 'a'
//     };

//     return numLog.slice(1).map((v, i) => {
//         return convert[v - numLog[i]]
//     }).join('')
// }
