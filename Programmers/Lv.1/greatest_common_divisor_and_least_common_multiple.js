function solution(n, m) {
  return [gcd(n, m), lcm(n, m)];
}

function gcd(a, b) {
  let gcd = 1;
  for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) gcd = i;
  }
  return gcd;
}

function lcm(a, b) {
  let lcm = 1;
  while (true) {
    if (lcm % a === 0 && lcm % b === 0) break;
    lcm++;
  }
  return lcm;
}
