function solution(array) {
  array.sort((a, b) => a - b);
  console.log(array.sort((a, b) => a - b));
  return Number(
    array
      .slice(Math.floor(array.length / 2), Math.floor(array.length / 2) + 1)
      .join("")
  );
}
