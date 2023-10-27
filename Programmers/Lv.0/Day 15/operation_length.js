function solution(num_list) {
  let sum = 0;
  let mul = 1;
  for (a of num_list) {
    if (num_list.length >= 11) {
      sum += a;
    } else if (num_list.length <= 10) {
      mul *= a;
    }
  }
  if (num_list.length >= 11) return sum;
  else if (num_list.length <= 10) return mul;
}
