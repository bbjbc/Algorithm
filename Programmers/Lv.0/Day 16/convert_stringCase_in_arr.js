function solution(strArr) {
  return strArr.map((a, i) => {
    if (i % 2 === 0) return a.toLowerCase();
    else return a.toUpperCase();
  });
}
