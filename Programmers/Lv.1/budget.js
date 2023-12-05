function solution(d, budget) {
  const sorting = d.sort((a, b) => a - b);
  const filtering = sorting.filter((i) => {
    if (budget - i >= 0) {
      budget -= i;
      return 1;
    }
    return 0;
  });
  return filtering.length;
}
