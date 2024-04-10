/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */

// 티켓을 구매하는데 걸리는 시간 반환
// 목표 인덱스의 티켓이 0이 될 때까지 반복
// 티켓 배열을 순회하면서 티켓이 있으면 1개 빼고 result++
// 만약 티켓이 0이 되고 목표 인덱스와 같다면 result 반환

var timeRequiredToBuy = function (tickets, k) {
  let result = 0;

  while (tickets[k] !== 0) {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i]) {
        tickets[i]--;
        result++;
        if (tickets[i] === 0 && i === k) return result;
      }
    }
  }

  return result;
};

console.log(timeRequiredToBuy([2, 3, 2], 2)); // 6
console.log(timeRequiredToBuy([5, 1, 1, 1], 0)); // 8
