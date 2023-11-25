function solution(M, N) {
  let count = 0;
  if (M === N) count = M * N - 1;
  else if (M !== N) count = M - 1 + (N - 1) * M;
  else count = 0;
  return count;
}
