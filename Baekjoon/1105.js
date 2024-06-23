// 1. 자리수별로 8의 개수를 세는 함수를 제작
// 2. L부터 R까지 반복문을 돌면서 8의 개수를 세고, 최소 개수를 찾아 반환
// 3. 최소 개수가 0이면 반복문을 종료

function solution(L, R) {
  function countEights(num) {
    let count = 0;
    while (num > 0) {
      if (num % 10 === 8) count++;
      num = Math.floor(num / 10);
    }

    return count;
  }

  let minCount = Infinity;

  for (let num = L; num <= R; num++) {
    let eightsCounting = countEights(num);

    if (minCount > eightsCounting) {
      minCount = eightsCounting;
    }
  }

  return minCount;
}

const fs = require("fs");
const [L, R] = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const result = solution(L, R);
console.log(result);
