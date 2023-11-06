function solution(arr) {
  const rows = arr.length;
  const cols = arr[0].length;

  if (rows > cols) {
    for (let i = 0; i < rows; i++) {
      for (let j = cols; j < rows; j++) {
        arr[i].push(0);
      }
    }
  } else {
    for (let i = rows; i < cols; i++) {
      const zeroRow = Array(cols).fill(0);
      arr.push(zeroRow);
    }
  }
  return arr;
}

// 행의 크기 - 4
// 열의 크기 - 3
// (4>3) 각 arr[0]에서 0추가
// 572 22 37 0
// 287 726 384 0
// 85 137 292 0
// 487 13 876 0

// 행의 크기 - 2
// 열의 크기 - 4
// (2<4) 각 열에 0으로 추가
// 57 192 534 2
// 9 345 192 999
// 0 0 0 0
// 0 0 0 0
