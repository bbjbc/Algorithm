function solution(sides) {
  let sumOfTwo = 0;
  let max = Math.max(...sides);
  for (let i = 0; i < sides.length; i++) {
    if (i !== sides.indexOf(max)) {
      sumOfTwo += sides[i];
    }
  }
  return max < sumOfTwo ? 1 : 2;
}
