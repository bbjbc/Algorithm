function solution(arr1, arr2) {
  return arr1.map((row, rowNum) =>
    row.map((n, colNum) => n + arr2[rowNum][colNum])
  );
}
