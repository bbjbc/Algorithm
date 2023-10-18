function solution(code) {
  let mode = 0;
  return (
    [...code].reduce((accumulator, currentValue, idx) => {
      if (mode) {
        if (currentValue !== "1" && idx % 2 === 1)
          return accumulator + currentValue;
        if (currentValue === "1") mode = 0;
      } else {
        if (currentValue !== "1" && idx % 2 === 0)
          return accumulator + currentValue;
        if (currentValue === "1") mode = 1;
      }
      return accumulator;
    }, "") || "EMPTY"
  );
}
