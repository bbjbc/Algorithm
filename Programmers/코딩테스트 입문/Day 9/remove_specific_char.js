function solution(my_string, letter) {
  return [...my_string].filter((a) => a !== letter).join("");
}
