function solution(my_string, indices) {
  return [...my_string].filter((s, i) => !indices.includes(i)).join("");
}
