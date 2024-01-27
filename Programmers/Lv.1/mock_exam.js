function solution(answers) {
  const arr = [];
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const firstCorrectGrade = answers.filter(
    (a, idx) => a === first[idx % first.length]
  ).length;
  const secondCorrectGrade = answers.filter(
    (a, idx) => a === second[idx % second.length]
  ).length;
  const thirdCorrectGrade = answers.filter(
    (a, idx) => a === third[idx % third.length]
  ).length;

  const max = Math.max(
    firstCorrectGrade,
    secondCorrectGrade,
    thirdCorrectGrade
  );
  if (max === firstCorrectGrade) {
    arr.push(1);
  }
  if (max === secondCorrectGrade) {
    arr.push(2);
  }
  if (max === thirdCorrectGrade) {
    arr.push(3);
  }

  return arr;
}
