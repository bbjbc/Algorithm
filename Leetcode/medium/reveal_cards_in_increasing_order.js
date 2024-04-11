/**
 * @param {number[]} deck
 * @return {number[]}
 */

// 덱을 오름차순으로 정렬함.
// 배열을 만들어서 덱의 가장 큰 수부터 넣어줌. → 정렬한 덱에서 맨 뒤 숫자 unshift()하면 됨.
// 배열의 맨 앞 숫자를 pop()해서 빼줌.
// 마지막에 배열의 맨 앞 숫자를 push()해서 넣어줌.

var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => a - b);
  const result = [];

  for (let i = deck.length - 1; i >= 0; i--) {
    result.unshift(deck[i]);
    result.unshift(result.pop());
  }

  result.push(result.shift());

  return result;
};

console.log(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7])); // [2, 13, 3, 11, 5, 17, 7]
console.log(deckRevealedIncreasing([1, 1000])); // [1, 1000]
