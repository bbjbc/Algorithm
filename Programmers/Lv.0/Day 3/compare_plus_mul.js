function solution(a, b) {
  const a_to_b = String(a) + String(b);
  const two_mul_a_mul_b = 2 * a * b;
  plus = Number(a_to_b);
  mul = two_mul_a_mul_b;
  return plus > mul ? plus : mul;
}
