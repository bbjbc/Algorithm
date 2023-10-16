function solution(a, b) {
  const a_to_b = String(a) + String(b);
  const b_to_a = String(b) + String(a);
  a = Number(a_to_b);
  b = Number(b_to_a);
  return a > b ? a : b;
}
