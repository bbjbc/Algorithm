function solution(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    const fillArray = Array(el).fill(el);
    result = [...result, ...fillArray];
  }
  return result;
}
