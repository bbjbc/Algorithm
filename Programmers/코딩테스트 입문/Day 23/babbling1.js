function solution(babbling) {
  let result = 0;
  for (let i = 0; i < babbling.length; i++) {
    let a = babbling[i];
    a = a.replaceAll("aya", " ");
    a = a.replaceAll("ye", " ");
    a = a.replaceAll("woo", " ");
    a = a.replaceAll("ma", " ");
    a = a.replaceAll(" ", "");
    if (a === "") result++;
  }
  return result;
}
