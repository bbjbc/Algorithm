function solution(s) {
  let countP = 0;
  let countY = 0;
  const ss = s.toLowerCase();
  for (const a of ss) {
    if (a === "p") countP++;
    else if (a === "y") countY++;
  }
  return countP === countY ? true : false;
}
