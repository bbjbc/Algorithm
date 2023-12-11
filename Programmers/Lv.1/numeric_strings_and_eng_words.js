function solution(s) {
  let word = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  word.forEach((a, idx) => {
    s = s.replaceAll(a, idx);
  });
  return Number(s);
}
