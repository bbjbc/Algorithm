function solution(s) {
  let count = 0;
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (bracket(s)) count++;
    s = s.slice(1) + s[0];
  }
  return count;
}

function bracket(str) {
  const arr = [];
  for (let i of str) {
    if (i === "(" || i === "{" || i === "[") {
      arr.push(i);
    } else {
      if (arr.length === 0) return false;
      const top = arr.pop();
      if (
        (i === ")" && top !== "(") ||
        (i === "}" && top !== "{") ||
        (i === "]" && top !== "[")
      ) {
        return false;
      }
    }
  }
  return arr.length === 0;
}
