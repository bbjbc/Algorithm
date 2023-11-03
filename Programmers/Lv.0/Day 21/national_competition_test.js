function solution(rank, attendance) {
  const filter = rank
    .map((value, index) => ({ value, index }))
    .filter((e, idx) => attendance[idx]);
  console.log(filter);
  const sorting = filter.sort((a, b) => a.value - b.value);
  console.log(sorting);

  return sorting[0].index * 10000 + sorting[1].index * 100 + sorting[2].index;
}
