function solution(array) {
  let result = -1;

  const arr = Array(Math.max(...array) + 1).fill(0);

  for (let i = 0; i < array.length; i++) {
    arr[array[i]]++;
  }

  let max = Math.max(...arr);

  if (max > 1) {
    result = arr.indexOf(max);
    arr[result] = 0;
    if (arr.includes(max)) {
      result = -1;
    }
  } else if (array.length === 1) {
    return array[0];
  }

  return result;
}
