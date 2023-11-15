function solution(cipher, code) {
  const result = [...cipher].filter((a, idx) => {
    if ((idx + 1) % code === 0) return a;
  });
  return result.join("");
}
