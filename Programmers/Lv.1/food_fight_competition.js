function solution(food) {
  const result = [];
  food = food.map((a, idx) => {
    if (idx !== 0) {
      if (a % 2 === 1) return Math.floor(a / 2);
      else return a / 2;
    }
    return a;
  });
  for (let i = 1; i < food.length; i++) {
    for (let j = 0; j < food[i]; j++) {
      result.push(i);
    }
  }

  return result.join("") + "0" + result.reverse().join("");
}
