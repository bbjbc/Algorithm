function solution(priorities, location) {
  let count = 0;
  const data = priorities.map((prior, index) => ({ prior, index }));
  let max = Math.max(...priorities);

  while (data.length > 0) {
    const front = data.shift();
    if (front.prior === max) {
      count++;
      if (front.index === location) {
        return count;
      }
      max = Math.max(...data.map((item) => item.prior));
    } else {
      data.push(front);
    }
  }
}
