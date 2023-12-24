function solution(people, limit) {
  let count = 0;
  const sorting = people.sort((a, b) => a - b);
  let left = 0,
    right = sorting.length - 1;
  while (left <= right) {
    if (sorting[left] + sorting[right] <= limit) {
      left++;
    }
    right--;
    count++;
  }
  return count;
}
