function solution(my_strings, parts) {
  return parts.reduce((acc, curr, i) => {
    const [s, e] = curr;
    const filter = my_strings[i].slice(s, e + 1);
    acc += filter;
    return acc;
  }, "");
}
