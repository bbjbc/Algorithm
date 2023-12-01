function solution(numbers) {
  let sum = 0;
  for (let i = 0; i <= 9; i++) {
    if (!numbers.sort().includes(i)) sum += i;
  }
  return sum;
}
