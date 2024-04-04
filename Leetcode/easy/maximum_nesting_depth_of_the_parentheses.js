/**
 * @param {string} s
 * @return {number}
 */

// 최대 괄호의 깊이를 구하는 문제임.
// 왼쪽 괄호가 나오면 count를 증가시키고 오른쪽 괄호가 나오면 count를 감소시킴.
// max에는 count와 max 중 큰 값을 저장함.

var maxDepth = function (s) {
  let count = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count++;
    } else if (s[i] === ")") {
      count--;
    }

    max = Math.max(max, count);
  }

  return max;
};
