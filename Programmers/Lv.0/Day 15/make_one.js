function solution(num_list) {
  let x = 0;
  for (a of num_list) {
    let num = a;
    while (num !== 1) {
      if (num % 2 === 0) num /= 2;
      else {
        num = (num - 1) / 2;
      }
      x++;
    }
  }
  return x;
}
