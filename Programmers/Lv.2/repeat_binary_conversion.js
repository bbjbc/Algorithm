function solution(s) {
  let count = 0,
    zeroCount = 0;
  while (s !== "1") {
    count += 1;
    zeroCount += [...s].filter((a) => a === "0").length;
    s = [...s].filter((a) => a === "1").length.toString(2);
  }
  return [count, zeroCount];
}
