function solution(myString) {
  return [...myString]
    .map((a) => {
      if (a === "a" || a === "A") return a.toUpperCase();
      else return a.toLowerCase();
    })
    .join("");
}
