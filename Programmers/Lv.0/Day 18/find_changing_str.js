function solution(myString, pat) {
  const filter = myString
    .replace(/A/g, "c")
    .replace(/B/g, "A")
    .replace(/c/g, "B");
  return filter.includes(pat) ? 1 : 0;
}
