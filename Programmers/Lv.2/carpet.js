// yellow 가로 x, yellow 세로 y
// x * y = yellow
// y = yellow/x
// (x+2) * (y+2) = brown + yellow
// 2x + 2y + xy + 4 = brown + yellow
// 2(x+y) + xy + 4 = brown + yellow
// 2(x+y) + yellow + 4 = brown + yellow
// 2(x+y) + 4 = brown
// 2(x+yellow/x) + 4 = brown
// x+yellow/x = (brown-4)/2
// x^2 - (brown-4)/2 + yellow/x - 2차 방정식 (근의 공식으로 x추출)
// ((brown-4)/2 + Math.sqrt(Math.pow((brown-4)/2,2) - 4*yellow))/2 = x

function solution(brown, yellow) {
  const x =
    ((brown - 4) / 2 + Math.sqrt(Math.pow((brown - 4) / 2, 2) - 4 * yellow)) /
    2;
  const y = yellow / x;
  return [x + 2, y + 2];
}
