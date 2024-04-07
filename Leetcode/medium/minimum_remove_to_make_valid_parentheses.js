/**
 * @param {string} s
 * @return {string}
 */

// 1. arr에 괄호의 인덱스를 저장한다.
// 2. 요소가 '(' 이면 arr에 인덱스를 push.
// 3. 요소가 ')' 이고 arr에 요소가 있으면 arr.pop()
// 4. 요소가 ')' 이고 arr에 요소가 없으면 s[i]를 ''로 바꿈.
// 5. arr에 남아있는 요소들을 빈 문자열로 바꿈.

var minRemoveToMakeValid = function (s) {
  const arr = [];
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      arr.push(i);
    } else if (s[i] === ")") {
      if (arr.length) {
        arr.pop();
      } else {
        s[i] = "";
      }
    }
  }

  for (let i of arr) {
    s[i] = "";
  }

  return s.join("");
};

console.log(minRemoveToMakeValid("lee(t(c)o)de)")); // "lee(t(c)o)de"
console.log(minRemoveToMakeValid("a)b(c)d")); // "ab(c)d"
