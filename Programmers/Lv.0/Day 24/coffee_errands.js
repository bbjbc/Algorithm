function solution(order) {
  const americano = 4500;
  const latte = 5000;

  let amount = 0;
  for (const item of order) {
    if (item.includes("americano")) {
      amount += americano;
    } else if (item.includes("latte")) {
      amount += latte;
    } else if (item.includes("anything")) {
      amount += americano;
    }
  }
  return amount;
}
