function solution(sizes) {
  const result = [];
  const max = [];
  const min = [];
  for (const size of sizes) {
    let tmp = 0;
    if (size[0] < size[1]) {
      tmp = size[1];
      size[1] = size[0];
      size[0] = tmp;
    }
    result.push(size);
    max.push(size[0]);
    min.push(size[1]);
  }
  return Math.max(...max) * Math.max(...min);
}
