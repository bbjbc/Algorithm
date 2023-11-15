function solution(my_string) {
  const result = [...my_string].map((a) => {
    if (97 <= a.charCodeAt() && a.charCodeAt() <= 122) return a.toUpperCase();
    else if (65 <= a.charCodeAt() && a.charCodeAt() <= 90)
      return a.toLowerCase();
  });
  return result.join("");
}
