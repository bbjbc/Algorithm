function solution(n) {
  let threeVillage = 0;
  for (let ten = 1; ten <= n; ten++) {
    threeVillage += 1;
    while (threeVillage % 3 === 0 || String(threeVillage).includes("3")) {
      threeVillage += 1;
    }
  }
  return threeVillage;
}
