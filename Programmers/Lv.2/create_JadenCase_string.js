function solution(s) {
  const word = s.split(" ");

  const ss = word.map((w) => {
    const firstChar = w.charAt(0);
    if (Number.isInteger(firstChar)) {
      return w.toLowerCase();
    } else {
      const first = firstChar.toUpperCase();
      const rest = w.slice(1).toLowerCase();
      return first + rest;
    }
  });
  return ss.join(" ");
}
