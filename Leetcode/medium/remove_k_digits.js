/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */

// 현재 숫자보다 arr의 마지막 숫자가 더 크면 pop()
// 아니라면 배열에 숫자를 넣어줌.
// 반복문이 끝나고도 k가 남아있으면 k만큼 pop()
// 배열의 맨 앞 숫자가 0이면 shift() 반복
// 배열의 길이가 0이면 0을 반환

var removeKdigits = function (num, k) {
  num = num.split("");
  let arr = [];

  for (let i = 0; i < num.length; i++) {
    while (k && arr.length && arr[arr.length - 1] > num[i]) {
      arr.pop();
      k--;
    }
    arr.push(num[i]);
  }

  while (k) {
    arr.pop();
    k--;
  }

  while (arr[0] === "0") {
    arr.shift();
  }

  return arr.length ? arr.join("") : "0";
};

console.log(removeKdigits("1432219", 3)); // "1219"
console.log(removeKdigits("10200", 1)); // "200"
