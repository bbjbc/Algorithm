function solution(quiz) {
  const answer = quiz.map((a) => {
    const [x, op, y, _, z] = a.split(" ");

    if (op === "+") {
      return +x + +y === +z ? "O" : "X";
    } else {
      return +x - +y === +z ? "O" : "X";
    }
  });
  return answer;
}
