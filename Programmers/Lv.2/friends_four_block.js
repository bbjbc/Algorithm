// 1. 주어진 배열문자열을 2차원 배열로 변환
// 2. 2차원 배열을 순회하면서 2x2로 같은 블록이 있는지 확인함.
// 3. 같은 블록이 있으면 해당 블록을 제거하고, 제거된 블록을 기준으로 아래 블록을 내림.
// 4. 2x2로 같은 블록이 없을 때까지 반복함.
// 5. 제거된 블록의 수를 반환함.
// removed는 제거된 블록이 있는지 확인하는 변수임.
// removeArr은 제거할 블록을 표시하는 배열임. → 제거할 블록은 true로 표시함.

function solution(m, n, board) {
  let answer = 0;
  let arr = board.map((b) => b.split(""));

  while (true) {
    let removeArr = Array.from({ length: m }, () => Array(n).fill(false));
    let removed = false;

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (
          arr[i][j] !== "" &&
          arr[i][j] === arr[i][j + 1] &&
          arr[i][j] === arr[i + 1][j] &&
          arr[i][j] === arr[i + 1][j + 1]
        ) {
          removeArr[i][j] = true;
          removeArr[i][j + 1] = true;
          removeArr[i + 1][j] = true;
          removeArr[i + 1][j + 1] = true;
          removed = true;
        }
      }
    }

    if (!removed) break;

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (removeArr[i][j]) {
          answer++;
          // 아래 포문은 제거된 블록을 기준으로 블록을 아래로 내리는 로직임.
          for (let k = i; k > 0; k--) {
            arr[k][j] = arr[k - 1][j];
          }
          // 제일 위에 있는 블록은 빈 문자열로 채워줌.
          arr[0][j] = "";
        }
      }
    }
  }

  return answer;
}

console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"])); // 14
console.log(
  solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])
); // 15
