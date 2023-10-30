function solution(myString, pat) {
  let result = "";
  for (let i = 0; i < myString.length; i++) {
    const filter = myString.slice(i, i + pat.length);
    if (filter === pat) {
      result = myString.slice(0, i + pat.length);
    }
  }
  return result;
}
