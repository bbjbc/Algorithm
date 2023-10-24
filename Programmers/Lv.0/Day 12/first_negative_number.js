function solution(num_list) {
  let result = 0;
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] < 0) return i;
  }
  return -1;
}
