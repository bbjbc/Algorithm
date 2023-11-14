function solution(my_string) {
  let sum = 0;
  const res = [...my_string].filter((a) => Number(a));
  for (const a of res) {
    sum += Number(a);
  }
  return sum;
}
