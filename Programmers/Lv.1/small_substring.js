function solution(t, p) {
  const result = [];
  let count = 0;
  for (let i = 0; i < t.length; i++) {
    const a = t.substring(i, p.length + i);
    result.push(a);
  }
  const filter = result.filter((a) => a.length === p.length);
  for (const a of filter) {
    if (Number(a) <= Number(p)) count++;
  }
  return count;
}
