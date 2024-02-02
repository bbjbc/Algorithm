function solution(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    const row = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      row.push(sum);
      // console.log(sum)
    }
    result.push(row);
  }
  return result;
}

// [0][0]*[0][0] + [0][1]*[1][0], [0][0]*[0][1] + [0][1]*[1][1]
// [1][0]*[0][0] + [1][1]*[1][0], [1][0]*[0][1] + [1][1]*[1][1]
// [2][0]*[0][0] + [2][1]*[1][0], [2][0]*[0][2] + [2][1]*[1][1]

// 1 4   3 3
// 3 2   3 3
// 4 1

// 3+12 3+12
// 9+6  9+6
// 12+3 12+3
