function solution(my_string) {
  const vowel = ["a", "e", "i", "o", "u"];
  return [...my_string].filter((a) => !vowel.includes(a)).join("");
}
