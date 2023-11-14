function solution(n) {
  let a = 0;
  while (factorial(a) <= n) a++;
  return a - 1;
}

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}
