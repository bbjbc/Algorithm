function solution(n) {
  let subak = "수박";
  if (n % 2 === 1) {
    return subak.repeat(n / 2) + subak.slice(0, 1);
  } else return subak.repeat(n / 2);
}
