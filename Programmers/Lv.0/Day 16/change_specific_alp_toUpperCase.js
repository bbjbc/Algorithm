function solution(my_string, alp) {
  return [...my_string]
    .map((a) => {
      if (a === alp) return a.toUpperCase();
      else return a.toLowerCase();
    })
    .join("");
}
