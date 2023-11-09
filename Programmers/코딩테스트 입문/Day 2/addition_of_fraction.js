function solution(numer1, denom1, numer2, denom2) {
  let numer = numer1 * denom2 + numer2 * denom1;
  let denom = denom1 * denom2;

  const getGCD = (a, b) => (b ? getGCD(b, a % b) : a);
  const gcd = getGCD(numer, denom);
  numer /= gcd;
  denom /= gcd;

  return [numer, denom];
}
