function solution(s) {
  let count = 0;
  const arr = Array(s.length).fill(0);
  const str = s.split("");
  const result = [];
  for (let i = 0; i < s.length; i++) {
    arr[str.indexOf(s[i])]++;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      result.push(s[i]);
    }
  }
  return result.sort().join("");
}

// 모든 인덱스를 순회하는데 앞에서부터와 뒤에서부터 일치하는 인덱스가
// 하나만 존재하면 그것이 한 번만 등장하는 문자이다!
// function solution(s){
//     const result =[]
//     for(const c of s){
//         if(s.indexOf(c)===s.lastIndexOf(c)) result.push(c)
//     }
//     return result.sort().join('')
// }
