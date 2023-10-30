function solution(myString) {
  const filter = myString.split("x");
  return filter.map((i) => i.length);
}
