function solution(i, j, k) {
  const result = [];
  let count = 0;
  for (let variable = i; variable <= j; variable++) {
    result.push(variable);
  }
  const arr = result.map(String);
  for (let i = 0; i < arr.length; i++) {
    const numStr = arr[i];
    for (let j = 0; j < numStr.length; j++) {
      if (numStr[j] === String(k)) count++;
    }
  }
  return count;
}

// function solution(i,j,k){
//     let a=''
//     for(i;i<=j;i++){
//         a+=i
//     }
//     return a.split(k).length-1
// }
