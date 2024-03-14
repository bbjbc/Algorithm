// 각 성격 유형에 따라 카운트를 올려줌.
// 7개의 선택지에 따라 점수를 부여함.
// 각 성격 유형에 따라 점수를 더해줌.
// 성격 유형에 따라 점수를 비교하여 높은 점수를 가진 성격 유형을 반환함.

function solution(survey, choices) {
  let score = { 1: 3, 2: 2, 3: 1, 4: 0, 5: 1, 6: 2, 7: 3 };
  let personality = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (let i = 0; i < survey.length; i++) {
    if (
      survey[i][0] === "R" ||
      survey[i][0] === "C" ||
      survey[i][0] === "J" ||
      survey[i][0] === "A"
    ) {
      if (choices[i] < 4) {
        personality[survey[i][0]] += score[choices[i]];
      } else {
        personality[survey[i][1]] += score[choices[i]];
      }
    } else if (
      survey[i][0] === "T" ||
      survey[i][0] === "F" ||
      survey[i][0] === "M" ||
      survey[i][0] === "N"
    ) {
      if (choices[i] < 4) {
        personality[survey[i][0]] += score[choices[i]];
      } else {
        personality[survey[i][1]] += score[choices[i]];
      }
    }
  }

  return `${personality["R"] >= personality["T"] ? "R" : "T"}${
    personality["C"] >= personality["F"] ? "C" : "F"
  }${personality["J"] >= personality["M"] ? "J" : "M"}${
    personality["A"] >= personality["N"] ? "A" : "N"
  }`;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
