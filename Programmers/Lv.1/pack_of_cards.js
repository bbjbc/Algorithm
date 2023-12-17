function solution(cards1, cards2, goal) {
  for (const a of goal) {
    if (cards1[0] === a) {
      cards1.shift();
    } else if (cards2[0] === a) {
      cards2.shift();
    } else return "No";
  }
  return "Yes";
}
