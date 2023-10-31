function solution(arr, flag) {
  const result = [];
  for (let i = 0; i < flag.length; i++) {
    if (flag[i]) {
      for (let j = 0; j < arr[i] * 2; j++) {
        result.push(arr[i]);
      }
    } else {
      result.splice(-arr[i]);
    }
  }
  return result;
}
// splice()를 사용하고 -인덱스를 하면 그 인덱스부터 맨 뒤까지 모두 삭제됨
