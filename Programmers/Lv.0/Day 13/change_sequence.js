function solution(num_list, n) {
  const filter = num_list.slice(n);
  return [...filter, ...num_list.slice(0, n)];
}
