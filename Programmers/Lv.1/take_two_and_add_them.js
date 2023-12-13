function solution(numbers) {
  const result = [];
  numbers.forEach((a, idx1) => {
    numbers.forEach((b, idx2) => {
      if (idx1 !== idx2) {
        result.push(a + b);
      }
    });
  });
  const setting = [...new Set(result)];
  setting.sort((a, b) => a - b);
  return setting;
}
