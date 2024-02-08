function solution(dartResult) {
  let nowScore = "",
    prevScore = "";
  let sum = 0;

  for (let i = 0; i < dartResult.length; i++) {
    switch (dartResult[i]) {
      case "S":
        nowScore = nowScore;
        break;
      case "D":
        nowScore = Math.pow(+nowScore, 2).toString();
        break;
      case "T":
        nowScore = Math.pow(+nowScore, 3).toString();
        break;
      case "*":
        nowScore = (+nowScore * 2).toString();
        prevScore = (+prevScore * 2).toString();
        break;
      case "#":
        nowScore = -nowScore;
        break;
      default:
        // 점수가 10일 경우
        if (dartResult[i] === "1" && dartResult[i + 1] === "0") {
          sum += +prevScore;
          prevScore = nowScore;
          nowScore = "10";
          i++;
        } else {
          sum += +prevScore;
          prevScore = nowScore;
          nowScore = dartResult[i];
        }
    }
  }
  return sum + Number(nowScore) + Number(prevScore);
}
