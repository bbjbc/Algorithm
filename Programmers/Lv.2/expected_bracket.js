function solution(a, b) {
  let count = 0,
    roundA = a,
    roundB = b;
  while (roundA !== roundB) {
    roundA = Math.ceil(roundA / 2);
    roundB = Math.ceil(roundB / 2);
    count += 1;
  }
  return count;
}
