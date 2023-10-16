function solution(str1, str2) {
  const s1 = [...str1];
  const s2 = [...str2];
  const answer = s1.map((a, i) => a + s2[i]);
  return answer.join("");
}
