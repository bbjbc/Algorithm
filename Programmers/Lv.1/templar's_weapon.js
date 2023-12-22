function solution(number, limit, power) {
  const result = [];
  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let idx = 1; idx <= Math.sqrt(i); idx++) {
      if (i % idx === 0) {
        if (i / idx === idx) count += 1;
        else count += 2;
      }
    }
    result.push(count); // 약수의 개수 담음
  }

  let sum = 0;
  result.forEach((a) => {
    if (a <= limit) sum += a;
    else sum += power;
  });
  return sum;
}
