function solution(myString) {
  let result = "";
  for (const char of myString) {
    if (char < "l") result += "l";
    else result += char;
  }
  return result;
}
