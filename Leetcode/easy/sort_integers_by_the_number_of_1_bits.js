/**
 * @param {number[]} arr
 * @return {number[]}
 */

// ⓐ 1의 개수를 세서 정렬함 → 시간이 오래(?) 걸림
// 각 숫자를 이진 문자열로 변환한 후 1의 개수를 세서 정렬함 → 상당한 연산량이 필요함
var sortByBits = function (arr) {
  arr.sort((a, b) => {
    const aBit = a
      .toString(2)
      .split("")
      .filter((e) => e === "1").length;
    const bBit = b
      .toString(2)
      .split("")
      .filter((e) => e === "1").length;
    if (aBit === bBit) return a - b;
    return aBit - bBit;
  });

  return arr;
};

// ⓑ 각 숫자의 이진 표현에서 1의 개수를 직접 세는 방식 → 더 빠름
var sortByBits = function (arr) {
  arr.sort((a, b) => {
    const aBits = countBits(a);
    const bBits = countBits(b);
    if (aBits === bBits) return a - b;
    return aBits - bBits;
  });

  return arr;
};

function countBits(num) {
  let count = 0;
  while (num !== 0) {
    count++;
    num >>= 1;
  }
  return count;
}

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
