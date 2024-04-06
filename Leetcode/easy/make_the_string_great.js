/**
 * @param {string} s
 * @return {string}
 */
// 인접한 두 문자를 같지 않게 하는 good string 만들기.
// 이전 문자와 현재 문자의 대소문자가 같고, 서로 다르면 pop
// 아니면 push

var makeGood = function (s) {
  let arr = [];

  for (let c of s) {
    let prev = arr.length ? arr[arr.length - 1] : "";
    if (prev.toLowerCase() === c.toLowerCase() && prev !== c) {
      arr.pop();
    } else {
      arr.push(c);
    }
  }

  return arr.join("");
};
