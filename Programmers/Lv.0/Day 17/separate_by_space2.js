function solution(my_string) {
  return my_string.replace(/\s+/g, " ").trim().split(" ");
}
