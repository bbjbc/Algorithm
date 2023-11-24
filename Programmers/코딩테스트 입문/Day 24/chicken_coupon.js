function solution(chicken) {
  let coupon = chicken;
  let sum = 0;
  while (coupon >= 10) {
    const service = Math.floor(coupon / 10);
    sum += service;
    coupon = (coupon % 10) + service;
  }
  return sum;
}
