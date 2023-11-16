function solution(numbers) {
  const arr = [
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
  for (let i = 0; i < arr.length; i++) {
    while (numbers.indexOf(arr[i]) !== -1) {
      numbers = numbers.replaceAll(arr[i], i);
    }
  }
  return Number(numbers);
}

// reduce 로 하면 간편하네
// var solution = (n) =>
//   Number(
//     [
//       "zero",
//       "one",
//       "two",
//       "three",
//       "four",
//       "five",
//       "six",
//       "seven",
//       "eight",
//       "nine",
//     ].reduce((t, s, i) => t.replaceAll(s, i), n)
//   );
