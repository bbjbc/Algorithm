function solution(numbers) {
  const arr = numbers.sort((a, b) => b - a);
  if (arr[arr.length - 1] < 0 && arr[arr.length - 2] < 0) {
    if (arr[0] * arr[1] < arr[arr.length - 1] * arr[arr.length - 2])
      return arr[arr.length - 1] * arr[arr.length - 2];
    else return arr[0] * arr[1];
  } else return arr[0] * arr[1];
}
