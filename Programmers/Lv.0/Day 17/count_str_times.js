function solution(myString, pat) {
  let result = 0;
  for (let i = 0; i < myString.length; i++) {
    const filter = myString.slice(i, i + pat.length);
    if (filter === pat) result += 1;
  }
  return result;
}
