function solution(num_list) {
  let a = num_list.length;
  if (num_list[a - 1] > num_list[a - 2]) {
    num_list.splice(a, 0, num_list[a - 1] - num_list[a - 2]);
  } else {
    num_list.splice(a, 0, num_list[a - 1] * 2);
  }
  return num_list;
}
