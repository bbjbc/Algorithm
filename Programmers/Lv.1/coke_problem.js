function solution(a, b, n) {
  let coke = n;
  let count = 0;
  while (coke >= a) {
    const coupon = Math.floor(coke / a) * b;
    count += coupon;
    coke = (coke % a) + coupon;
  }
  return count;
}
