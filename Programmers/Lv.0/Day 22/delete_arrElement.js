function solution(arr, delete_list) {
  const result = [];
  for (const el of arr) {
    if (!delete_list.includes(el)) result.push(el);
  }
  return result;
}
