function solution(emergency) {
  let sorting = emergency.slice().sort((a, b) => b - a);
  return emergency.map((a) => sorting.indexOf(a) + 1);
}
