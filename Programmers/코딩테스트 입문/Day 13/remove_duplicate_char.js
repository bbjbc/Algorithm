function solution(my_string) {
  const result = [];
  const arr = [...my_string];
  for (let i = 0; i < my_string.length; i++) {
    if (!result.includes(arr[i])) result.push(arr[i]);
  }
  return result.join("");
}
