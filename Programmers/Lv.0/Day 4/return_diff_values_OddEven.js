function solution(n) {
  const arr = [];
  const initialValue = 0;
  if (n % 2 === 1) {
    for (let i = n; i > 0; i--) {
      if (i % 2 === 1) arr.push(i);
    }
    return arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
  } else {
    for (let j = n; j > 0; j--) {
      if (j % 2 === 0) arr.push(j);
    }
    return arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue ** 2,
      initialValue
    );
  }
}
