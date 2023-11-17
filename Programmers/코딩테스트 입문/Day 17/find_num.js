function solution(num, k) {
  let result = 0;
  const arr = String(num).split("");
  // console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === String(k)) result = arr.indexOf(arr[i]) + 1;
  }
  if (!String(num).includes(k)) return -1;
  return result;
}
