// 0 0 0 0 0
// 0 0 1 0 3
// 0 2 5 0 1
// 4 2 4 4 2
// 3 5 1 3 1

// 2차원 배열에서 꺼내서 bucket에 담는다.
// moves에서의 값과 2차원배열에서의 값이 존재한다?
// 존재하면 크레인이 꺼내려는 값과 bucket에 있는 값과 비교
// 다르다면 push, 같다면 pop 후 count 2개 증가
// 2차원 배열에서 꺼냈으면 0으로 초기화
// 계속 반복문이 이어지면 move에서의 값이 반복되므로 열에서의 pop/push 작업이 끝났으면 break

function solution(board, moves) {
  let count = 0;
  const bucket = [];

  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1]) {
        if (board[i][move - 1] !== bucket[bucket.length - 1]) {
          bucket.push(board[i][move - 1]);
        } else {
          bucket.pop();
          count += 2;
        }

        board[i][move - 1] = 0;
        break;
      }
    }
  });

  return count;
}
