function solution(age) {
  let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  return [...String(age)].map((a) => alpha[a]).join("");
}
