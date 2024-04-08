/**
 * @param {string} s
 * @return {boolean}
 */

// 1. 왼쪽에서 오른쪽으로 탐색하면서 (, * 이면 left++, )이면 left--한다.
// 2. 오른쪽에서 왼쪽으로 탐색하면서 ), * 이면 right++, (이면 right--한다.
// 3. 만약 left, right가 0보다 작으면 false를 반환한다. → *이 바꿀 수 있는 괄호가 없음. → 올바른 괄호가 아님.
// 4. 모든 문자열을 탐색하고 left, right가 0보다 작지 않으면 true를 반환한다.

var checkValidString = function (s) {
  let left = 0;
  let right = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "*") {
      left++;
    } else {
      left--;
    }

    if (s[s.length - 1 - i] === ")" || s[s.length - 1 - i] === "*") {
      right++;
    } else {
      right--;
    }

    if (left < 0 || right < 0) {
      return false;
    }
  }

  return true;
};

console.log(checkValidString("()"));
console.log(checkValidString("(*)"));
console.log(checkValidString("(*))"));
