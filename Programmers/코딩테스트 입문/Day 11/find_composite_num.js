function compositeNum(n) {
  if (n < 4) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return true;
  }
  return false;
}

function solution(n) {
  let count = 0;
  while (n > 0) {
    if (compositeNum(n)) count++;
    n--;
  }
  return count;
}
