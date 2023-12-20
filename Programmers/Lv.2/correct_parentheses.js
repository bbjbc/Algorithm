function solution(s) {
  const stk = [];

  s.split("").map((str) => {
    if (str === ")" && stk[stk.length - 1] === "(") {
      stk.pop();
    } else stk.push(str);
  });
  return stk.length === 0;
}
