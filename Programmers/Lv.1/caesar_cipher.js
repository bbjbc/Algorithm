function solution(s, n) {
  const result = s.split("").map((a) => {
    const num = a.charCodeAt();
    if (65 <= num && num <= 90) {
      return String.fromCharCode(((num + n - 65) % 26) + 65);
    } else if (97 <= num && num <= 122) {
      return String.fromCharCode(((num + n - 97) % 26) + 97);
    } else return String.fromCharCode(num);
  });
  return result.join("");
}
