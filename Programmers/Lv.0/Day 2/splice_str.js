function solution(my_string, overwrite_string, s) {
  const arr1 = [...my_string];
  arr1.splice(s, overwrite_string.length, overwrite_string);
  return arr1.join("");
}
